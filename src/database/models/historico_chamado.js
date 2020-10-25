const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const sequelize = new Sequelize(db);
    
const historicoChamado = sequelize.define('HistoricoChamado', {
    id_historico_chamado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_chamado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_chamado',
    },
    titulo: DataTypes.TEXT,
    descricao: DataTypes.TEXT,
    atualizacao: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    situacao: DataTypes.STRING,
    created_at:DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
}, { tableName: 'historico_chamado', timestamps: true });

module.exports = historicoChamado;