import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="relative p-2 rounded-xl bg-obsidian-900/80 dark:bg-obsidian-850/80 border border-emerald-500/20 text-slate-300 hover:text-neon-electric hover:border-neon-electric/40 transition-all duration-200"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-400 animate-spin-slow" />
      ) : (
        <Moon size={18} className="text-emerald-600" />
      )}
    </button>
  );
}
