// import { Users } from "../../schema/users";
const Users = require("../../schema/users");

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const users = new Users();
      await queryInterface.addColumn("users", "is_seed", Sequelize.BOOLEAN, {
        defaultValue: false,
      });
      const result = await queryInterface.bulkInsert(
        "users",
        users.generate(1000)
      );
    } catch (error) {
      console.error("Error when seeding is: ", error.message);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      is_seed: true,
    });
    await queryInterface.removeColumn("users", "is_seed");
  },
};
