import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {Navbar} from './components/template/Navbar';
import reportWebVitals from './reportWebVitals';
import {Footer} from "./components/template/Footer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
