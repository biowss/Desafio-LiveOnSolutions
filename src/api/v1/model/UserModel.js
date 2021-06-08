const Database = require('../../../database');

const Usuarios = Database.sequelize.define('usuarios', {
  nome: {
    type: Database.Sequelize.STRING
  },
  sobrenome: {
    type: Database.Sequelize.STRING
  },
  email: {
    type: Database.Sequelize.STRING
  },
  senha: {
    type: Database.Sequelize.STRING
  },
  telefone: {
    type: Database.Sequelize.STRING
  },
  celular: {
    type: Database.Sequelize.STRING
  },
  cpf: {
    type: Database.Sequelize.STRING
  },
  rg: {
    type: Database.Sequelize.STRING
  },
  data_cadastro: {
    type: Database.Sequelize.DATEONLY
  },
  hora_cadastro: {
    type: Database.Sequelize.TIME
  }
}, 
{
  timestamps: false
})

module.exports = Usuarios