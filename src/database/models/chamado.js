const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const sequelize = new Sequelize(db);

/*class Chamado extends Model {

}*/

const Chamado = sequelize.define('Chamado', {
    id_chamado: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        field: 'id_chamado' 
    },
    titulo:     {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descricao:  {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    situacao:   DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
}, {  freezeTableName: true, timestamps: true, tableName: 'chamado' });

module.exports = Chamado
