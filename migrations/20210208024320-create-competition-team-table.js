'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompetitionTeam', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      competition_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Competitions",
          key: "id"
        }
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teams",
          key: "id"
        }
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
    await queryInterface.dropTable('CompetitionTeam');
  }
};
