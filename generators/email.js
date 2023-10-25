const fs = require("fs");
const _ = require("lodash");
const { readTxtFileFillWithSize } = require("../utils/read_txt");

module.exports = {
  emailGenerator: (size) => {
    const emails = readTxtFileFillWithSize("lists/email.txt", size);
    return _.sampleSize(emails, size);
  },
};
