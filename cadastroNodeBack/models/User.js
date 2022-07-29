//================conexão linha por tabela com o sql==============

const Sequelize = require('sequelize'); //importar o Sequelize 
const db = require('./db'); //conexão com o banco de dados

//criar tabela automaticamente:
const User = db.define('users', { 
    //primeira coluna:
    id: {                         
        type: Sequelize.INTEGER,   
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },
    //segunda coluna:
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    //terceira coluna:
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//criar a tabela:
/*User.sync();/comentar dps que cria a tabela :D

/*verifica se há alguma diferença na tabela, realiza a alteração:
User.sync({alter:true});*/

//exportar:
module.exports = User;



