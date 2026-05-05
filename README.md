# XGBoard — Landing

Landing page do [XGBoard](https://github.com/xulioguimaraes/XGBoard), um gerenciador de área de transferência nativo para macOS.

Deploy: [xgboard.vercel.app](https://xgboard.vercel.app)

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS v3
- shadcn/ui (style: new-york)
- lucide-react
- Cor primária `#6376C9` (extraída da logo do app)

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
```

## Google Analytics

A landing carrega `gtag.js` automaticamente quando `VITE_GA_ID` está definida.

**Local** (`.env`, ignorado pelo git):
```bash
VITE_GA_ID=G-XXXXXXXXXX
```

**Produção (Vercel)**: dashboard do projeto → Settings → Environment Variables → adicione `VITE_GA_ID` com o Measurement ID. Faça um redeploy.

Sem a variável definida, o componente `<Analytics />` é no-op (não carrega nenhum script).

## Estrutura

```
src/
├── App.tsx
├── main.tsx
├── index.css                  # Tailwind base + tokens shadcn (HSL)
├── lib/utils.ts               # cn() helper
└── components/
    ├── ui/                    # shadcn primitives (button, card, badge, separator)
    └── site/
        ├── Header.tsx
        ├── Hero.tsx
        ├── AppDemo.tsx        # mockup interativo do picker
        ├── Features.tsx
        ├── Install.tsx
        └── Footer.tsx
```

## Adicionar novos componentes shadcn

`components.json` está configurado. Use o CLI:

```bash
npx shadcn@latest add <componente>
```

## Licença

MIT
