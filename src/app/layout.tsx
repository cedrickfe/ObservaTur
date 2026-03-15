import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'ObservaTur | Gestão inteligente do turismo municipal',
  description: 'Protótipo front-end responsivo para apresentação da plataforma ObservaTur.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
