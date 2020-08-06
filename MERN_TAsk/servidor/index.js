const express = require('express');

// Crear Servidor

const app = express();

// puerto de la app
const PORT = process.env.PORT || 4000;

// Definir página principal
app.get('/', (req, res)=>{
    res.send('Hola Mundo');
})

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});