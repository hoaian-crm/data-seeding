"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("roles", [
      {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "User role default",
        description: "Default role in system",
      },
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "Root",
        description: "Root role in system",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("roles", {
      id: 1,
    });
    queryInterface.bulkDelete("roles", {
      id: 2,
    });
  },
};
