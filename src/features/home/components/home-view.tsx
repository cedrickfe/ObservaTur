import { Container } from '@/components/ui/container';
import { CitiesTable } from '@/features/home/components/cities-table';
import { HeroSection } from '@/features/home/components/hero-section';
import { HighlightsSection } from '@/features/home/components/highlights-section';
import { StatsSection } from '@/features/home/components/stats-section';

export function HomeView() {
  return (
    <Container className="space-y-6 py-[var(--space-page-y)]">
      <HeroSection />
      <StatsSection />
      <HighlightsSection />
      <CitiesTable />
    </Container>
  );
}
