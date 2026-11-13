# Portfólio · Pablo Kauê Bastos

Portfólio em React (Vite), página única, tema escuro.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build   # gera a pasta dist/
```

## Onde editar

- **Textos, links, projetos, certificados:** `src/data.js`
- **Visual:** `src/index.css` (as cores ficam nas variáveis do `:root`)
- **Foto:** `public/foto.jpg` e `public/foto.webp` (900x900). Para trocar, substitua os dois arquivos. Sem eles, o site mostra o avatar "PB".

## Publicar

- **Netlify / Vercel:** importe o repositório. Build command `npm run build`, pasta de saída `dist`.
- **GitHub Pages:** rode `npm run build` e publique a pasta `dist`.
