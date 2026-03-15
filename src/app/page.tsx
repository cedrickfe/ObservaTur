import { AttractionsTable } from '@/components/domain/attractions-table';
import { EventsList } from '@/components/domain/events-list';
import { InsightsGrid } from '@/components/domain/insights-grid';
import { KpiCard } from '@/components/domain/kpi-card';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import { kpis } from '@/data/mock-data';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-4 p-3 md:space-y-6 md:p-6">
      <Topbar />
      <div className="flex gap-4 md:gap-6">
        <Sidebar />
        <section className="flex-1 space-y-4 md:space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </div>

          <InsightsGrid />

          <div className="grid gap-4 xl:grid-cols-[1.8fr_1fr]">
            <AttractionsTable />
            <EventsList />
          </div>
        </section>
      </div>
    </main>
  );
}
