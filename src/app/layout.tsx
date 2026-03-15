import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'ObservaTur | Gestão inteligente do turismo municipal',
  description:
    'Protótipo front-end responsivo da plataforma ObservaTur para apresentação em hackathon, com dados mockados.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-white text-slate-700">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
