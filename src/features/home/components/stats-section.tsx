import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { homeStats } from '@/data';
import { Card } from '@/components/ui/card';

export function StatsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {homeStats.map((stat) => {
        const isUp = stat.trend === 'up';
        return (
          <Card key={stat.id} className="space-y-3">
            <p className="text-sm text-slate-500">{stat.title}</p>
            <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
            <p className={`inline-flex items-center gap-1 text-sm font-medium ${isUp ? 'text-emerald-600' : 'text-amber-600'}`}>
              {isUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              {stat.change}
            </p>
          </Card>
        );
      })}
    </section>
  );
}
