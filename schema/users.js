const AbstractSchema = require("./index");
const generators = require("../generators/index");

const userSchema = {
  email: generators.email,
  displayName: generators.name,
  password: generators.password,
  avatar: generators.avatar,
  referralCode: (size) => generators.code(size, 8),
  otpCode: (size) => generators.code(size, 8),
  iss: "user_good",
  isSeed: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

module.exports = class Users extends AbstractSchema {
  constructor() {
    super(userSchema);
  }
};
