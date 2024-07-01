// Importamos React para usar JSX y componentes
import React from 'react';
// Importamos useNavigate de react-router-dom para la navegación entre rutas
import { useNavigate } from 'react-router-dom';

// Definimos el componente funcional Menu
function Menu() {
  // Obtenemos la función navigate de useNavigate para manejar la navegación entre rutas
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Título principal */}
      <h1 className="mt-4 mb-4">Menú</h1>
      {/* Botón para navegar de regreso a la página de Alumnos */}
      <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>Alumnos</button>
    </div>
  );
}

// Exportamos el componente Menu para ser utilizado en otros componentes
export default Menu;
