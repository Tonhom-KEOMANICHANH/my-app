import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoute from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoute></AppRoute>
  </React.StrictMode>
);