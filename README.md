# Cinematic Proposal App

A cinematic, few-click web proposal app built with Angular. It walks your partner through memories, then reveals a dramatic final love message.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Personalize your proposal

All core text and flow content lives in `src/app/app.ts` under `proposalConfig`.

Update these fields:

- `yourName` and `partnerName`
- `openingLine`
- `finalTitle`, `finalMessage`, and `finalQuestion`
- `heartbeatPrompts` (short pre-final lines)

## Add your own photos

1. Put your images in `src/assets/` (for example: `memory-1.jpg`, `memory-2.jpg`, `memory-3.jpg`).
2. In `src/app/app.ts`, update each `gallery[].src` path to your real files.
3. Replace `gallery[].caption` and `gallery[].alt` with your own text.

Current placeholders:

- `src/assets/memory-1.svg`
- `src/assets/memory-2.svg`
- `src/assets/memory-3.svg`

## Build and test

```bash
npm run build
npm test
```

## Deploy options

- **Netlify**: connect the repo, build command `npm run build`, publish directory `dist/dating/browser`.
- **GitHub Pages**: build the app and deploy the generated `dist/dating/browser` static files.
