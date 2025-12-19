import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShortApp from './ShortApp';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Simple routing based on query parameter
const searchParams = new URLSearchParams(window.location.search);
const version = searchParams.get('v');

let ComponentToRender = App;

if (version === 'short') {
  ComponentToRender = ShortApp;
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ComponentToRender />
  </React.StrictMode>
);