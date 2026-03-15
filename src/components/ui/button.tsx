import { cn } from '@/lib/cn';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
};

export function Button({ className, children, variant = 'primary' }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-[var(--radius-md)] border px-4 py-2 text-sm font-medium transition',
        variant === 'primary'
          ? 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900',
        className
      )}
    >
      {children}
    </button>
  );
}
