'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      club1_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clubs',
          key: 'id'
        }
      },
      club2_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clubs',
          key: 'id'
        }
      },
      score_club1: {
        type: Sequelize.INTEGER
      },
      score_club2: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Matches');
  }
};