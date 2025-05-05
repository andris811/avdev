import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Apply theme based on system preference if no saved theme
const storedTheme = localStorage.getItem("theme");
if (!storedTheme) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', prefersDark);
  localStorage.setItem("theme", prefersDark ? "dark" : "light");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: report performance metrics
reportWebVitals();
