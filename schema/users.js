const AbstractSchema = require("./index");
const generators = require("../generators/index");

const userSchema = {
  email: generators.email,
  display_name: generators.name,
  password: generators.password,
  avatar: generators.avatar,
  referral_code: (size) => generators.code(size, 8),
  otp_code: (size) => generators.code(size, 8),
  iss: "user_good",
  is_seed: true,
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = class Users extends AbstractSchema {
  constructor() {
    super(userSchema);
  }
};
