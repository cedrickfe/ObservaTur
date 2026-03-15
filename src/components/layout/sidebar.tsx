import { BarChart3, CalendarRange, LayoutDashboard, Map, MapPinned } from 'lucide-react';

const items = [
  { label: 'Visão Geral', icon: LayoutDashboard },
  { label: 'Inventário Turístico', icon: MapPinned },
  { label: 'Mapa de Atrativos', icon: Map },
  { label: 'Indicadores', icon: BarChart3 },
  { label: 'Eventos', icon: CalendarRange }
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 lg:block">
      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Módulos</p>
      <nav className="mt-3 space-y-1">
        {items.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${
              index === 0
                ? 'bg-brand-50 text-brand-500'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
