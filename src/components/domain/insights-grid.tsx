import { insights } from '@/data/mock-data';
import { Card } from '@/components/ui/card';

export function InsightsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {insights.map((insight) => (
        <Card key={insight.id} className="space-y-2">
          <p className="text-sm text-slate-500">{insight.title}</p>
          <p className="text-lg font-semibold text-slate-900">{insight.value}</p>
          <p className="text-xs text-slate-400">{insight.subtitle}</p>
        </Card>
      ))}
    </div>
  );
}
