// Importamos React para usar JSX y componentes
import React from 'react';
// Importamos BrowserRouter, Routes y Route desde react-router-dom para el enrutamiento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos los componentes Home y Menu
import Home from './Home';
import Menu from './Menu';

function App() {
  return (
    // Definimos el enrutador de la aplicación usando BrowserRouter
    <Router>
      {/* Definimos las rutas de la aplicación */}
      <Routes>
        {/* Ruta para el componente Home que se renderiza en la ruta raíz */}
        <Route path="/" element={<Home />} />
        {/* Ruta para el componente Menu que se renderiza en la ruta /menu */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

// Exportamos el componente App como el componente principal de la aplicación
export default App;
