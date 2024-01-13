const express = require('express');
const contactoRoutes = require('./routes/contacto');

const app = express();

// Configura middleware para parsear JSON en las solicitudes
app.use(express.json());

// Configura tus rutas
app.use('/api', contactoRoutes); // Cambia '/api' por la ruta que desees

// Otro middleware y configuraciones...

// Inicia tu servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});