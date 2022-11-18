const Sequelize = require('sequelize');



const sequelize = require('../util/database');

const Todo = sequelize.define('todo',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    tname:{
        type: Sequelize.STRING,
        allowNull:false
    },
    tdescription:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    }
    

});

module.exports = Todo;