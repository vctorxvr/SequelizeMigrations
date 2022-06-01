'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Produtos', 'quantidade',
    { 
      type:Sequelize.INTEGER,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) 
  {
     await queryInterface.removeColumn('Produtos', 'quantidade');
  }
};
