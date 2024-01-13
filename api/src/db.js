const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', 
  host: 'localhost',
  username: '',
  password: '',
  database: '',
  logging: false, // Para ver las consultas SQL ejecutadas por Sequelize
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
};

module.exports = {
  conectarBD,
  models,
  sequelize,
};