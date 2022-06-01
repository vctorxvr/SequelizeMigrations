'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('Produtos', 
      { id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
      },

      nome: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },

      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false, 
      },

      Validade: Sequelize.STRING,

      });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Produtos');
     
  }
};
