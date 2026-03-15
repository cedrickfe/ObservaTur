import { Bell, Building2, ChevronDown, Search } from 'lucide-react';
import { cities } from '@/data/mock-data';

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 rounded-2xl border border-slate-200 bg-white p-3 md:p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">ObservaTur</p>
          <h1 className="text-xl font-semibold text-slate-900">Painel Municipal de Turismo</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50">
            <Building2 className="h-4 w-4" />
            {cities[0]}
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50">
            <Search className="h-4 w-4" />
          </button>
          <button className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
