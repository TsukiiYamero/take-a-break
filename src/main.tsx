import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import './index.css';
import { HashRouter } from 'react-router';
import { Router } from './router/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </HeroUIProvider>
  </StrictMode>,
);
