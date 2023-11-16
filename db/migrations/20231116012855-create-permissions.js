"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("permissions", permissions);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.delete("permissions");
  },
};

const permissions = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Login",
    description: "Allow login to system",
    policy: "public",
    resource: "/users/login",
    upstream: "Authentication",
    method: "POST",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Register",
    description: "Allow user register to system",
    policy: "public",
    resource: "/users/register",
    upstream: "Authentication",
    method: "POST",
  },
];
