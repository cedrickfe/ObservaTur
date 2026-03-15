import { cn } from '@/lib/cn';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <section
      className={cn(
        'rounded-[var(--radius-lg)] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50/70 hover:shadow-md',
        className
      )}
    >
      {children}
    </section>
  );
}
