import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import type { Kpi } from '@/types/observatur';
import { Card } from '@/components/ui/card';

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = kpi.icon;
  const isUp = kpi.trend === 'up';

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{kpi.label}</p>
        <span className="rounded-lg bg-slate-100 p-2 text-slate-600">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-900">{kpi.value}</p>
        <span className={`inline-flex items-center text-sm font-medium ${isUp ? 'text-emerald-600' : 'text-amber-600'}`}>
          {isUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {kpi.delta}
        </span>
      </div>
    </Card>
  );
}
