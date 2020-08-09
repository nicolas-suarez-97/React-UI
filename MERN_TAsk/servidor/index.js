const express = require('express');
const conectarDB = require('./config/db');
// Crear Servidor

const app = express();

//COnecar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({extended:true}));

// puerto de la app
const PORT = process.env.PORT || 4000;

// Definir página principal
// app.get('/', (req, res)=>{
//     res.send('Hola Mundo');
// })

// Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});