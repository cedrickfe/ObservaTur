import { LucideIcon } from 'lucide-react';

export type Kpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
};

export type TouristSpot = {
  id: string;
  name: string;
  category: string;
  district: string;
  status: 'Ativo' | 'Em revisão';
};

export type EventItem = {
  id: string;
  title: string;
  city: string;
  date: string;
  audience: string;
};

export type Insight = {
  id: string;
  title: string;
  value: string;
  subtitle: string;
};
