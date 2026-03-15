# ObservaTur Front-end (Protótipo)

Base inicial do front-end da plataforma **ObservaTur**, preparada para demonstração de hackathon com arquitetura escalável, UI responsiva e dados 100% mockados.

## Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Lucide React

## Estrutura profissional
```text
src/
  app/                     # rotas e layout global
  components/
    layout/                # navbar e estruturas globais
    ui/                    # componentes base reutilizáveis
  features/
    home/
      components/          # composição da tela inicial
      types/               # tipagens específicas da feature
  data/
    mock/                  # dados simulados centralizados
    index.ts               # barrel file dos mocks
  types/                   # tipagens compartilhadas
  hooks/                   # hooks reutilizáveis
  lib/
    constants/             # configurações e constantes do app
    cn.ts                  # utilitário de classes
  styles/                  # tokens visuais e base global
public/                    # assets públicos
```

## O que já está pronto
- Layout global com navbar inicial.
- Home funcional e responsiva para desktop/tablet/mobile.
- Sistema base de tipografia, espaçamento e bordas via tokens CSS.
- Componentes base reutilizáveis (`Button`, `Card`, `Container`).
- Dados mockados centralizados para iteração rápida.

## Executar
```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`.
