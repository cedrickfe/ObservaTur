import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <Card className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <div className="space-y-4">
        <p className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          Protótipo SaaS • Front-end Only
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Plataforma para gestão pública e privada do turismo municipal.
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 md:text-base">
          O ObservaTur centraliza inventário turístico, indicadores e eventos para apoiar decisões estratégicas com
          visão clara e responsiva para secretarias, trade e equipes técnicas.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>Explorar painel</Button>
          <Button variant="ghost">Ver módulos</Button>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {['Multi-cidade', 'Escalável', 'Dados mockados'].map((pill) => (
          <div key={pill} className="rounded-[var(--radius-md)] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            {pill}
          </div>
        ))}
      </div>
    </Card>
  );
}
