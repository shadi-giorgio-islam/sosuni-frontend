import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {Navbar} from './components/template/Navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

reportWebVitals();
