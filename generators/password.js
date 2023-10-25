const _ = require("lodash");
const bcrypt = require("bcrypt");
const { readTxtFileFillWithSize } = require("../utils/read_txt");

module.exports = {
  passwordGenerator: (size) => {
    const passwords = readTxtFileFillWithSize("lists/password.txt", size);
    return _.sampleSize(passwords, size).map((password) =>
      bcrypt.hashSync(password, 1)
    );
  },
};
