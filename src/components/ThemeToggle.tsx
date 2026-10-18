import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema claro u oscuro"
      className="relative p-2.5 rounded-xl bg-slate-200/90 hover:bg-slate-300/90 dark:bg-obsidian-850/80 dark:hover:bg-obsidian-800 border border-slate-300 dark:border-emerald-500/25 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-neon-electric hover:border-emerald-500/50 transition-all duration-200 shadow-sm"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-400" />
      ) : (
        <Moon size={18} className="text-emerald-700" />
      )}
    </button>
  );
}
