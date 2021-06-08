const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD, 
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_TYPE,
    logging: false
  }
)

sequelize.authenticate().then( () => {
  console.log("👉 Banco de dados conectado com sucesso! 👌");
}).catch( error => {
  console.log("❌ Falha ao se conectar: " + error);
})

module.exports = {
  Sequelize,
  sequelize
}