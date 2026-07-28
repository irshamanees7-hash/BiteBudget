import { BookOpen, Home, Layers, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'About', id: 'about', icon: Sparkles },
  { label: 'Planner', id: 'planner', icon: Layers },
  { label: 'Saved', id: 'saved', icon: BookOpen },
];

export default function NavBar({ currentPage, onChange }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button className="text-left" onClick={() => onChange('home')}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">BiteBudget</p>
          <p className="text-xs text-slate-500">Smart Pantry Meals</p>
        </button>
        <nav className="flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                  active ? 'bg-sky-600 text-white shadow-soft' : 'text-slate-600 hover:bg-slate-100'
                }`}
                onClick={() => onChange(item.id)}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
