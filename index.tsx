import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DefesaEnergetica from './DefesaEnergetica';
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
} else if (path === '/defesa-energetica' || path === '/defesa-energetica.html' || version === 'defesa-energetica') {
  ComponentToRender = DefesaEnergetica;
}

// Os componentes de turmas anteriores permanecem no histórico e no código-fonte,
// mas os endereços comerciais antigos encaminham para a turma vigente.
const coursePath = /^\/mesa-quantica(?:-espera)?(?:\.html)?\/?$/.test(path);
const courseVersion = ['mesa-quantica', 'mesa-quantica-espera', 'short'].includes(version || '');
const isThankYou = path === '/obrigado' || path === '/obrigado.html' || version === 'obrigado';
const isDefesa = path === '/defesa-energetica' || path === '/defesa-energetica.html' || version === 'defesa-energetica';

if (!isThankYou && (coursePath || (!isDefesa && courseVersion))) {
  const destination = new URL('https://cintiacamerin.com/mesa-quantica/');
  searchParams.delete('v');
  destination.search = searchParams.toString();
  destination.hash = window.location.hash;
  window.location.replace(destination.href);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ComponentToRender />
    </React.StrictMode>
  );
}
