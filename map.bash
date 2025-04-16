src/
│
├── assets/                 # Imágenes, íconos, fonts, etc.
│
├── background/             # Scripts para background (ej. listeners de alarmas, notificaciones)
│   └── index.ts
│
├── content/                # Scripts que corren en las páginas web (si se usan)
│   └── index.ts
│
├── popup/                  # Todo lo relacionado al popup
│   ├── components/         # Componentes de UI (Atoms, Molecules)
│   │   ├── ui/             # Elementos puros y reusables (atoms: Button, Input, etc)
│   │   └── shared/         # Molecules o componentes que combinan varios UI
│   ├── pages/              # Vistas del popup (ej. Home, Settings)
│   ├── hooks/              # Hooks específicos del popup
│   ├── utils/              # Helpers específicos del popup
│   └── index.tsx          # Entry point del popup
│
├── options/                # Opcional: si agregas una página de configuración (options page)
│   └── ...
│
├── services/               # Funciones para alarmas, notificaciones, storage, IA, etc.
│   ├── alarm.service.ts
│   ├── notification.service.ts
│   ├── storage.service.ts
│   └── openai.service.ts   # Si usas IA en algún punto
│
├── shared/                 # Código compartido (ej. tipos, contextos, hooks globales, constantes)
│   ├── components/         # UI o layouts compartidos entre features
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   └── constants/
│
├── styles/                 # Archivos tailwind base, SCSS u otros globales
│   ├── tailwind.scss
│   └── variables.scss
│
├── router/                 # react-router-dom setup si usas rutas en el popup
│   └── index.tsx
│
└── manifest.ts             # Manifest generado dinámicamente o estático
