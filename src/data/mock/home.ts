import type { StatCard, NavItem } from '@/types/common';
import type { CitySummary, Highlight } from '@/features/home/types/home.types';

export const navItems: NavItem[] = [
  { label: 'Início', href: '#' },
  { label: 'Cidades', href: '#' },
  { label: 'Indicadores', href: '#' },
  { label: 'Inventário', href: '#' },
  { label: 'Eventos', href: '#' }
];

export const homeStats: StatCard[] = [
  { id: '1', title: 'Visitantes/mês', value: '48.920', change: '+12%', trend: 'up' },
  { id: '2', title: 'Atrativos mapeados', value: '312', change: '+8', trend: 'up' },
  { id: '3', title: 'Eventos ativos', value: '27', change: '+4', trend: 'up' },
  { id: '4', title: 'Satisfação média', value: '4,6/5,0', change: '-0,2', trend: 'down' }
];

export const highlights: Highlight[] = [
  {
    id: '1',
    title: 'Dashboard multi-cidade',
    description: 'Compare desempenho entre municípios com indicadores centralizados e leitura rápida.'
  },
  {
    id: '2',
    title: 'Inventário turístico inteligente',
    description: 'Organize atrativos e equipamentos com visão padronizada para gestão pública e privada.'
  },
  {
    id: '3',
    title: 'Agenda de eventos integrada',
    description: 'Acompanhe sazonalidade, fluxo esperado e impacto local dos principais eventos.'
  }
];

export const citySummaries: CitySummary[] = [
  { id: '1', city: 'Bonito (MS)', attractions: 84, events: 7, satisfaction: '4,8/5,0' },
  { id: '2', city: 'Pirenópolis (GO)', attractions: 63, events: 6, satisfaction: '4,5/5,0' },
  { id: '3', city: 'Paraty (RJ)', attractions: 75, events: 8, satisfaction: '4,7/5,0' }
];
