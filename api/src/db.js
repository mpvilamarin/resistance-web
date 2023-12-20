const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', // Puedes cambiarlo según tu base de datos (por ejemplo, 'mysql', 'sqlite')
  host: 'localhost', // Cambia esto según la configuración de tu base de datos
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
  logging: false, // Puedes habilitar esto para ver las consultas SQL ejecutadas por Sequelize
});

// Prueba la conexión a la base de datos
async function conectarBD() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Carga los modelos
const models = {
  Contacto: require('./models/contacto')(sequelize),
  // Agrega otros modelos aquí si es necesario
};

// Asocia relaciones entre modelos si es necesario

module.exports = {
  conectarBD,
  models,
  sequelize,
};