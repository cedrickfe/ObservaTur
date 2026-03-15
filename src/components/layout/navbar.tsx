import { navItems } from '@/data';
import { appConfig } from '@/lib/constants/theme';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-slate-900">{appConfig.name}</p>
          <p className="text-xs text-slate-500">{appConfig.tagline}</p>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="ghost">Demo Hackathon</Button>
      </Container>
    </header>
  );
}
