const { emailGenerator } = require("./email");
const { nameGenerator } = require("./name");
const { passwordGenerator } = require("./password");
const { avatarGenerator } = require("./avatar");
const { codeGenerator } = require("./code");

module.exports = {
  email: emailGenerator,
  name: nameGenerator,
  password: passwordGenerator,
  avatar: avatarGenerator,
  code: codeGenerator,
};
