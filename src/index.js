import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import HomeComponent from './components/HomeComponent';
import { RouterContextProvider } from 'react-router-dom';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';
import DoctoresEspecialidad from './components/DoctoresEspecialidad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
    <h1>Inicio</h1>
    <MenuRutas/>
    <Router/>
    */}
    <h1>Index Principal</h1>
    <MenuRutas/>
    <Router/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
