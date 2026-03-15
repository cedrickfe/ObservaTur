import { cn } from '@/lib/cn';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-7xl px-[var(--space-page-x)]', className)}>{children}</div>;
}
