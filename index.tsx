import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShortApp from './ShortApp';
import ThankYouPage from './ThankYouPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Roteamento robusto para SPA
const path = window.location.pathname;
const searchParams = new URLSearchParams(window.location.search);
const version = searchParams.get('v');

let ComponentToRender = App;

// Verifica se a URL é /obrigado (clean url) OU ?v=obrigado (query param seguro)
if (path === '/obrigado' || path === '/obrigado.html' || version === 'obrigado') {
  ComponentToRender = ThankYouPage;
} else if (version === 'short') {
  ComponentToRender = ShortApp;
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ComponentToRender />
  </React.StrictMode>
);