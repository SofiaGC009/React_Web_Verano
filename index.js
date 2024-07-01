// Importamos React para usar JSX y componentes
import React from 'react';
// Importamos createRoot desde react-dom/client para renderizar la aplicación en React 18
import ReactDOM from 'react-dom/client';
// Importamos el archivo de estilos CSS
import './index.css';
// Importamos el componente principal App
import App from './App';
// Importamos el archivo de estilos CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Seleccionamos el elemento del DOM con id 'root' donde se montará la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos el componente App dentro del modo estricto de React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

