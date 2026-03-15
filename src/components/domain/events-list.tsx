import { upcomingEvents } from '@/data/mock-data';
import { Card } from '@/components/ui/card';

export function EventsList() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Agenda de eventos</h2>
      <div className="space-y-3">
        {upcomingEvents.map((event) => (
          <article key={event.id} className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50">
            <p className="font-medium text-slate-800">{event.title}</p>
            <p className="text-sm text-slate-500">{event.city}</p>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>{event.date}</span>
              <span>{event.audience}</span>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
