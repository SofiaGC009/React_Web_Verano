// Importamos React para usar JSX y componentes
import React from 'react';

// Importamos los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Definimos el componente funcional HomeView que recibe varias props
function HomeView({ data, name, value, setName, setValue, fetchData, addData, navigate }) {
  return (
    <div className="container">
      {/* Título principal */}
      <h1 className="mt-4 mb-4">Alumnos</h1>
      {/* Lista de alumnos */}
      <ul className="list-group mb-4">
        {/* Mapeamos los datos recibidos para mostrar cada alumno en un <li> */}
        {data.map((item, index) => (
          <li key={index} className="list-group-item">{item.name}: {item.value}</li>
        ))}
      </ul>
      {/* Título secundario para agregar alumnos */}
      <h2>Agregar Alumnos</h2>
      {/* Formulario para agregar alumnos */}
      <form className="mb-4">
        {/* Campo de entrada para el nombre del alumno */}
        <div className="form-group">
          <label htmlFor="inputName">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Nombre"
            value={name} // Valor del campo de entrada
            onChange={e => setName(e.target.value)} // Manejador de evento para actualizar 'name'
          />
        </div>
        {/* Campo de entrada para la matrícula del alumno */}
        <div className="form-group">
          <label htmlFor="inputValue">Matrícula</label>
          <input
            type="text"
            className="form-control"
            id="inputValue"
            placeholder="Matrícula"
            value={value} // Valor del campo de entrada
            onChange={e => setValue(e.target.value)} // Manejador de evento para actualizar 'value'
          />
        </div>
        {/* Botón para agregar un nuevo alumno */}
        <button type="button" className="btn btn-primary mr-2" onClick={addData}>Agregar</button>
        {/* Botón para navegar al menú */}
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/menu')}>Ir al Menú</button>
      </form>
    </div>
  );
}

// Exportamos el componente HomeView para ser utilizado en otros componentes
export default HomeView;
