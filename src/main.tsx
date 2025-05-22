import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import css from './App.css?inline';

const rootElement = document.createElement('div');
rootElement.id = 'chatbot';
document.body.appendChild(rootElement);

const shadowRoot = rootElement.attachShadow({ mode: 'open' });

const style = document.createElement('style');
style.textContent = css;
shadowRoot.appendChild(style);

createRoot(shadowRoot).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
