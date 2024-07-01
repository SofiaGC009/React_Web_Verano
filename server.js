// Importamos los módulos necesarios para el servidor
const express = require('express'); // Framework web para Node.js
const mysql = require('mysql2'); // Cliente MySQL para Node.js
const cors = require('cors'); // Middleware para permitir solicitudes CORS
const bodyParser = require('body-parser'); // Middleware para analizar cuerpos de solicitud JSON

// Creamos una instancia de la aplicación Express
const app = express();
const port = 3001; // Puerto en el que se ejecutará el servidor

// Middleware para permitir solicitudes CORS desde cualquier origen
app.use(cors());
// Middleware para analizar cuerpos de solicitud JSON
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Usuario de la base de datos
  password: '', // Contraseña del usuario de la base de datos
  database: 'testdb' // Nombre de la base de datos
});

// Conectamos a la base de datos MySQL
db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

// Endpoint para obtener datos desde la base de datos
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM mytable'; // Consulta SQL para seleccionar todos los registros de 'mytable'
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result); // Enviamos los resultados de la consulta como respuesta
  });
});

// Endpoint para agregar datos a la base de datos
app.post('/api/data', (req, res) => {
  const { name, value } = req.body; // Obtenemos 'name' y 'value' del cuerpo de la solicitud
  const sql = 'INSERT INTO mytable (name, value) VALUES (?, ?)'; // Consulta SQL para insertar datos en 'mytable'
  db.query(sql, [name, value], (err, result) => {
    if (err) throw err;
    res.send('Data added'); // Enviamos una respuesta indicando que los datos se han agregado correctamente
  });
});

// Iniciamos el servidor y lo hacemos escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
