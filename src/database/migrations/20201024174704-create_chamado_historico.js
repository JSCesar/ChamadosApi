'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     queryInterface.createTable('historico_chamado', {

      id_historico_chamado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_chamado: Sequelize.INTEGER,
      atualizacao: Sequelize.TEXT('long'),
      titulo: Sequelize.TEXT,
      descricao: Sequelize.TEXT,
      situacao: Sequelize.STRING,
      created_at: Sequelize.DATE,
      created_by: Sequelize.INTEGER,
      updated_at: Sequelize.DATE,
      updated_by: Sequelize.INTEGER,

     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     queryInterface.dropTable('historico_chamado');
  }
};
