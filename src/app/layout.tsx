import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ObservaTur | Gestão inteligente do turismo municipal',
  description:
    'Protótipo front-end da plataforma ObservaTur para gestão pública e privada do turismo municipal.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
