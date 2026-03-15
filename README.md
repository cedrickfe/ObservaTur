# ObservaTur Front-end (Protótipo)

Protótipo navegável em Next.js + TypeScript para apresentação de hackathon da plataforma **ObservaTur**.

## Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Lucide Icons

## Estrutura
```text
src/
  app/                # rotas e layout global
  components/
    domain/           # componentes de negócio (KPIs, tabelas, listas)
    layout/           # topbar, sidebar e blocos estruturais
    ui/               # componentes básicos reutilizáveis
  data/               # dados mockados
  lib/                # utilitários
  types/              # tipagens de domínio
```

## Rodando localmente
```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`
