"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const role = await queryInterface.select(null, "roles", {
      where: { id: 2 },
    });
    const policy = ["users:profile", "users:update_password"];
    const permissions = await queryInterface.select(null, "permissions", {
      where: {
        policy: {
          [Sequelize.Op.in]: policy,
        },
      },
    });

    await queryInterface.bulkInsert(
      "role_permissions",
      permissions.map((permission) => ({
        role_id: 2,
        permission_id: permission.id,
      }))
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
