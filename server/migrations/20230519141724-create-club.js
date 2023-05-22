'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING,
        unique : true
      },
      name: {
        type: Sequelize.STRING,
        unique : true
      },
      city: {
        type: Sequelize.STRING,
        unique : true
      },
      matchTotals: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      win: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      draw: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      loss: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      golScored: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      lossGol: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clubs');
  }
};