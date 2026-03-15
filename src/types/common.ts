export type NavItem = {
  label: string;
  href: string;
};

export type StatCard = {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
};
