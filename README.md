# Bright Future - Landing Page

Landing page dla programu Bright Future - dodatkowego zabezpieczenia emerytalnego i ubezpieczenia na życie.

## Technologie

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Instalacja

```bash
npm install
```

## Uruchomienie w trybie deweloperskim

```bash
npm run dev
```

Strona będzie dostępna pod adresem [http://localhost:3000/bright-future](http://localhost:3000/bright-future)

## Build produkcyjny

```bash
npm run build
npm start
```

## Struktura projektu

```
├── app/
│   ├── bright-future/
│   │   └── page.tsx          # Główna strona landing page
│   ├── globals.css            # Globalne style Tailwind
│   └── layout.tsx             # Root layout z metadanymi
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

