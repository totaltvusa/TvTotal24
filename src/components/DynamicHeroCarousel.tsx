import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicHeroCarouselProps {
  fallbackImage: string;
  altText?: string;
  cycleIntervalMs?: number;
}

interface GitHubContentItem {
  name: string;
  path: string;
  type: string;
  download_url: string;
}

const GITHUB_API_URL =
  'https://api.github.com/repos/totaltvusa/images/contents/hero-carousel';

const MEDIA_EXTENSIONS_REGEX = /\.(webp|png|jpe?g|gif|mp4|webm)$/i;
const VIDEO_EXTENSIONS_REGEX = /\.(mp4|webm)$/i;

const isVideoUrl = (url: string): boolean => VIDEO_EXTENSIONS_REGEX.test(url);

const preloadMedia = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (isVideoUrl(url)) {
      const video = document.createElement('video');
      video.src = url;
      video.preload = 'auto';
      video.onloadeddata = () => resolve(true);
      video.onerror = () => resolve(false);
      setTimeout(() => resolve(true), 3000);
    } else {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    }
  });
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function DynamicHeroCarousel({
  fallbackImage,
  altText = 'Experiencia de Streaming TvTotal24',
  cycleIntervalMs = 4500,
}: DynamicHeroCarouselProps) {
  const [currentMedia, setCurrentMedia] = useState<string>(fallbackImage);
  const [mediaPool, setMediaPool] = useState<string[]>([fallbackImage]);
  const currentIndexRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true;

    async function discoverAndPreloadMedia() {
      try {
        const response = await fetch(GITHUB_API_URL, {
          signal: abortController.signal,
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) return;

        const data: GitHubContentItem[] = await response.json();
        if (!Array.isArray(data) || data.length === 0) return;

        const validUrls = data
          .filter(
            (item) =>
              item.type === 'file' &&
              MEDIA_EXTENSIONS_REGEX.test(item.name) &&
              Boolean(item.download_url)
          )
          .map((item) => item.download_url);

        if (validUrls.length === 0 || !isMounted) return;

        const shuffled = shuffleArray(validUrls);
        const pool = shuffled.includes(fallbackImage) ? shuffled : [fallbackImage, ...shuffled];

        if (isMounted) {
          setMediaPool(pool);
          if (pool.length > 1) {
            preloadMedia(pool[1]);
          }
        }
      } catch {
        // Silent catch for offline or API limits
      }
    }

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number })
          .requestIdleCallback(() => discoverAndPreloadMedia(), { timeout: 3500 });
        return () => {
          isMounted = false;
          abortController.abort();
          if ('cancelIdleCallback' in window) {
            (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
          }
        };
      } else {
        const timer = setTimeout(discoverAndPreloadMedia, 2000);
        return () => {
          isMounted = false;
          abortController.abort();
          clearTimeout(timer);
        };
      }
    }
  }, [fallbackImage]);

  const advanceSlide = useCallback(() => {
    if (mediaPool.length <= 1 || isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    const nextIndex = (currentIndexRef.current + 1) % mediaPool.length;
    const nextUrl = mediaPool[nextIndex];

    preloadMedia(nextUrl).then(() => {
      currentIndexRef.current = nextIndex;
      setCurrentMedia(nextUrl);

      const lookaheadIndex = (nextIndex + 1) % mediaPool.length;
      preloadMedia(mediaPool[lookaheadIndex]);

      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 700);
    });
  }, [mediaPool]);

  const isCurrentVideo = isVideoUrl(currentMedia);

  useEffect(() => {
    if (mediaPool.length <= 1) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isCurrentVideo) {
      // Safety timeout (35s) in case video fails to fire onEnded or stalls
      timerRef.current = setTimeout(advanceSlide, 35000);
    } else {
      // Standard interval for images
      timerRef.current = setTimeout(advanceSlide, cycleIntervalMs);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentMedia, mediaPool.length, isCurrentVideo, advanceSlide, cycleIntervalMs]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-obsidian-950">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentMedia}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0 w-full h-full"
        >
          {isCurrentVideo ? (
            <video
              key={currentMedia}
              ref={(el) => {
                if (el) {
                  el.muted = true;
                  el.defaultMuted = true;
                  const playPromise = el.play();
                  if (playPromise !== undefined) {
                    playPromise.catch(() => {
                      // Autoplay caught silently
                    });
                  }
                }
              }}
              src={currentMedia}
              autoPlay
              muted
              playsInline
              webkit-playsinline="true"
              onEnded={advanceSlide}
              onError={advanceSlide}
              className="w-full h-full object-contain bg-black"
            />
          ) : (
            <img
              src={currentMedia}
              alt={altText}
              fetchPriority="high"
              className="w-full h-full object-cover bg-black"
              width="800"
              height="450"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Decorative gradient overlay with green glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80 pointer-events-none rounded-2xl sm:rounded-3xl" />
      <div className="absolute inset-0 border border-neon-electric/20 rounded-2xl sm:rounded-3xl pointer-events-none" />
    </div>
  );
}
