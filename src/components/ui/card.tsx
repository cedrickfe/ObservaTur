import { cn } from '@/lib/cn';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:bg-slate-50/60',
        className
      )}
    >
      {children}
    </section>
  );
}
