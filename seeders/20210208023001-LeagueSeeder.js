'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Leagues', [
      {
        "code": "BSA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "PL",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "ELC",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "CL",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "EC",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "FL1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "BL1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "SA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "DED",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "PPL",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "PD",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "code": "WC",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Leagues', null, {});
  }
};
