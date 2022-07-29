const Sequelize = require('sequelize');

const sequelize = new Sequelize("tutorial", "root", null,{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados feito com sucesso")
}).catch(function(){
    console.log("ERRO")
});

module.exports = sequelize;