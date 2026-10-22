import { useState, useRef, useEffect } from 'react';
import { WHATSAPP_LINKS } from '@/data';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingWhatsApp() {
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragInfoRef = useRef<{
    startX: number;
    startY: number;
    startOffsetX: number;
    startOffsetY: number;
    hasDragged: boolean;
    pointerId: number | null;
  }>({
    startX: 0,
    startY: 0,
    startOffsetX: 0,
    startOffsetY: 0,
    hasDragged: false,
    pointerId: null,
  });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary button (left mouse click or touch contact)
    if (e.button !== 0) return;

    dragInfoRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startOffsetX: offset.x,
      startOffsetY: offset.y,
      hasDragged: false,
      pointerId: e.pointerId,
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if pointer capture is not supported
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { pointerId, startX, startY, startOffsetX, startOffsetY } = dragInfoRef.current;
    if (pointerId === null || e.pointerId !== pointerId) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Movement threshold to distinguish a tap/click from an intentional drag
    if (!dragInfoRef.current.hasDragged && Math.hypot(dx, dy) > 5) {
      dragInfoRef.current.hasDragged = true;
      setIsDragging(true);
    }

    if (dragInfoRef.current.hasDragged) {
      const container = containerRef.current;
      const btnWidth = container?.offsetWidth || 64;
      const btnHeight = container?.offsetHeight || 64;
      const margin = 16;
      const initialRight = 24; // from CSS right-6 (24px)
      const initialBottom = 24; // from CSS bottom-6 (24px)

      // Calculate boundary limits relative to the initial bottom-right anchor
      const maxX = initialRight - margin; // moving towards right edge (positive x)
      const minX = -(window.innerWidth - btnWidth - margin - initialRight); // moving towards left edge (negative x)

      const maxY = initialBottom - margin; // moving towards bottom edge (positive y)
      const minY = -(window.innerHeight - btnHeight - margin - initialBottom); // moving towards top edge (negative y)

      const targetX = startOffsetX + dx;
      const targetY = startOffsetY + dy;

      const clampedX = Math.min(maxX, Math.max(minX, targetX));
      const clampedY = Math.min(maxY, Math.max(minY, targetY));

      setOffset({ x: clampedX, y: clampedY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const { pointerId, hasDragged } = dragInfoRef.current;
    if (pointerId !== null && e.pointerId === pointerId) {
      try {
        e.currentTarget.releasePointerCapture(pointerId);
      } catch {
        // Fallback
      }

      dragInfoRef.current.pointerId = null;

      if (hasDragged) {
        // Drag movement finished, stay exactly where the user placed it
        setTimeout(() => setIsDragging(false), 50);
      } else {
        // Clean tap/click without drag: open WhatsApp
        setIsDragging(false);
        window.open(WHATSAPP_LINKS.general, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragInfoRef.current.pointerId === e.pointerId) {
      dragInfoRef.current.pointerId = null;
      setIsDragging(false);
    }
  };

  // Keep button within visible screen on resize or orientation change
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const btnWidth = containerRef.current.offsetWidth || 64;
      const btnHeight = containerRef.current.offsetHeight || 64;
      const margin = 16;
      const initialRight = 24;
      const initialBottom = 24;

      const maxX = initialRight - margin;
      const minX = -(window.innerWidth - btnWidth - margin - initialRight);
      const maxY = initialBottom - margin;
      const minY = -(window.innerHeight - btnHeight - margin - initialBottom);

      setOffset((prev) => ({
        x: Math.min(maxX, Math.max(minX, prev.x)),
        y: Math.min(maxY, Math.max(minY, prev.y)),
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none ${
        isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab hover:scale-102'
      } transition-transform duration-75`}
      title="¿Dudas? Chatea con nosotros por WhatsApp (Arrastra para mover)"
      role="button"
      tabIndex={0}
      aria-label="Chatea con nosotros por WhatsApp. Puedes mover este botón arrastrándolo."
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(WHATSAPP_LINKS.general, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      {/* Floating Pill Label */}
      <div
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-emerald-500/40 dark:border-neon-electric/40 text-xs font-bold text-slate-800 dark:text-white shadow-2xl hover:border-emerald-500 dark:hover:border-neon-electric hover:shadow-neon-glow transition-all backdrop-blur-xl group pointer-events-none select-none"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-neon-electric animate-pulse" />
        <span className="group-hover:text-emerald-600 dark:group-hover:text-neon-electric transition-colors select-none">
          ¿Dudas? Chatea con nosotros
        </span>
      </div>

      {/* Floating WhatsApp Action Button */}
      <div
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#00c853] to-[#00e676] text-obsidian-950 flex items-center justify-center shadow-2xl shadow-neon-electric/50 border-2 border-white/50 hover:shadow-neon-glow transition-all duration-300 pointer-events-none select-none"
      >
        <WhatsAppIcon size={32} className="text-obsidian-950 pointer-events-none" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-electric opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-obsidian-950"></span>
        </span>
      </div>
    </div>
  );
}
