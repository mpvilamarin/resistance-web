const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/api/contacto', async (req, res) => {
  try {
    // Extraer datos del formulario
    const { nombre, email, mensaje } = req.body;

    // Configurar el servicio de correo
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Puedes cambiarlo según tu proveedor de correo
      auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña'
      }
    });

    // Configurar el contenido del correo
    const mailOptions = {
      from: 'tu_correo@gmail.com',
      to: 'destinatario@gmail.com', // Cambia esto al correo al que deseas enviar los formularios
      subject: 'Nuevo formulario de contacto',
      html: `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>`
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Enviar correo de confirmación al remitente
    const confirmacionOptions = {
      from: 'tu_correo@gmail.com',
      to: email,
      subject: 'Confirmación de envío de formulario',
      html: '<p>Gracias por enviar el formulario. Hemos recibido tu mensaje correctamente.</p>'
    };

    await transporter.sendMail(confirmacionOptions);

    // Responder al cliente
    res.status(200).send('Formulario enviado con éxito.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar el formulario.');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});