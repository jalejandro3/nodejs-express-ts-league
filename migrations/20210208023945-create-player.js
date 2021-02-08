'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teams",
          key: "id"
        }
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dateOfBirth: {
        allowNull: true,
        type: Sequelize.STRING
      },
      countryOfBirth: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nationality: {
        allowNull: true,
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Players');
  }
};