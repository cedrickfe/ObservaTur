import { cn } from '@/lib/cn';

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
};

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-slate-100 text-slate-600',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700'
};

export function Badge({ className, children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit rounded-full border border-slate-200 px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
