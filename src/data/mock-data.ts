import { CalendarDays, Landmark, MapPinned, Users } from 'lucide-react';
import type { EventItem, Insight, Kpi, TouristSpot } from '@/types/observatur';

export const cities = ['Bonito (MS)', 'Pirenópolis (GO)', 'Paraty (RJ)', 'Gramado (RS)'];

export const kpis: Kpi[] = [
  { id: '1', label: 'Visitantes no mês', value: '48.920', delta: '+12%', trend: 'up', icon: Users },
  { id: '2', label: 'Atrativos cadastrados', value: '312', delta: '+8', trend: 'up', icon: MapPinned },
  { id: '3', label: 'Eventos ativos', value: '27', delta: '+4', trend: 'up', icon: CalendarDays },
  { id: '4', label: 'Inventário concluído', value: '86%', delta: '-2%', trend: 'down', icon: Landmark }
];

export const insights: Insight[] = [
  { id: '1', title: 'Pico de visitação', value: 'Sábados (14h-18h)', subtitle: 'Baseado nos últimos 30 dias' },
  { id: '2', title: 'Origem principal', value: 'Turistas regionais (62%)', subtitle: 'Levantamento de formulários' },
  { id: '3', title: 'Satisfação média', value: '4,6 / 5,0', subtitle: 'Amostra de 1.430 respostas' }
];

export const touristSpots: TouristSpot[] = [
  { id: '1', name: 'Centro Histórico', category: 'Cultural', district: 'Centro', status: 'Ativo' },
  { id: '2', name: 'Cachoeira do Sol', category: 'Natureza', district: 'Zona Rural', status: 'Ativo' },
  { id: '3', name: 'Museu Municipal', category: 'História', district: 'Centro', status: 'Em revisão' },
  { id: '4', name: 'Mercado do Artesão', category: 'Compras', district: 'Bairro Sul', status: 'Ativo' }
];

export const upcomingEvents: EventItem[] = [
  { id: '1', title: 'Festival Gastronômico', city: 'Pirenópolis (GO)', date: '12-15 Set 2026', audience: '8.000 pessoas' },
  { id: '2', title: 'Semana do Turismo Rural', city: 'Bonito (MS)', date: '22-28 Set 2026', audience: '5.200 pessoas' },
  { id: '3', title: 'Feira de Negócios do Trade', city: 'Gramado (RS)', date: '03 Out 2026', audience: '2.100 pessoas' }
];
