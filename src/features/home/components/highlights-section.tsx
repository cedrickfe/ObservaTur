import { highlights } from '@/data';
import { Card } from '@/components/ui/card';

export function HighlightsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {highlights.map((highlight) => (
        <Card key={highlight.id} className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">{highlight.title}</h2>
          <p className="text-sm text-slate-600">{highlight.description}</p>
        </Card>
      ))}
    </section>
  );
}
