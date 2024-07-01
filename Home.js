// Importamos React y hooks useState, useEffect para manejar el estado y efectos secundarios
import React, { useState, useEffect } from 'react';
// Importamos axios para hacer peticiones HTTP
import axios from 'axios';
// Importamos useNavigate de react-router-dom para la navegación entre rutas
import { useNavigate } from 'react-router-dom';
// Importamos el componente HomeView que contiene la estructura de la interfaz de usuario
import HomeView from './Home.jsx';

function Home() {
  // Definimos estados locales usando hooks useState
  const [data, setData] = useState([]); // Para almacenar los datos obtenidos del servidor
  const [name, setName] = useState(''); // Para el nombre del alumno ingresado
  const [value, setValue] = useState(''); // Para la matrícula del alumno ingresada
  const navigate = useNavigate(); // Para manejar la navegación entre rutas

  // Función asíncrona para obtener datos del servidor
  const fetchData = async () => {
    try {
      // Realizamos una petición GET al servidor para obtener los datos
      const response = await axios.get('http://localhost:3001/api/data');
      // Actualizamos el estado 'data' con los datos obtenidos de la respuesta
      setData(response.data);
    } catch (error) {
      // Manejamos errores en caso de que falle la petición GET
      console.error('Error fetching data:', error);
    }
  };

  // useEffect se ejecuta al montar el componente para cargar los datos iniciales
  useEffect(() => {
    fetchData(); // Llamamos a la función fetchData para cargar los datos iniciales
  }, []); // El segundo argumento [] indica que useEffect se ejecuta solo al montar el componente

  // Función asíncrona para agregar nuevos datos al servidor
  const addData = async () => {
    try {
      // Realizamos una petición POST al servidor para agregar un nuevo alumno con 'name' y 'value'
      const response = await axios.post('http://localhost:3001/api/data', { name, value });
      console.log(response.data); // Imprimimos en consola la respuesta del servidor
      fetchData(); // Volvemos a cargar los datos después de agregar un nuevo registro
    } catch (error) {
      // Manejamos errores en caso de que falle la petición POST
      console.error('Error adding data:', error);
    }
  };

  // Renderizamos el componente HomeView y pasamos las props necesarias para la vista
  return (
    <HomeView
      data={data} // Pasamos el estado 'data' con los datos obtenidos del servidor
      name={name} // Pasamos el estado 'name' para el nombre del alumno
      value={value} // Pasamos el estado 'value' para la matrícula del alumno
      setName={setName} // Pasamos la función 'setName' para actualizar el estado 'name'
      setValue={setValue} // Pasamos la función 'setValue' para actualizar el estado 'value'
      fetchData={fetchData} // Pasamos la función 'fetchData' para obtener datos del servidor
      addData={addData} // Pasamos la función 'addData' para agregar nuevos datos al servidor
      navigate={navigate} // Pasamos la función 'navigate' para manejar la navegación entre rutas
    />
  );
}

// Exportamos el componente Home como el componente principal de este archivo
export default Home;
