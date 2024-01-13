const { Contacto } = require('../database/models'); // Asegúrate de importar el modelo correcto

const contactoController = {
  createContacto: async (req, res) => {
    try {
      const { nombre, email, telefono, empresa, mensaje } = req.body;

      // Crea un nuevo contacto en la base de datos
      const nuevoContacto = await Contacto.create({
        nombre,
        email,
        telefono,
        empresa,
        mensaje,
      });

      // Puedes enviar una respuesta JSON si lo deseas
      res.status(201).json({ mensaje: 'Contacto creado exitosamente', contacto: nuevoContacto });
    } catch (error) {
      console.error('Error al crear el contacto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = contactoController;