const _ = require("lodash");
const { readTxtFileFillWithSize } = require("../utils/read_txt");

module.exports = {
  avatarGenerator: (size) => {
    const avatars = readTxtFileFillWithSize("lists/avatar.txt", size);
    return _.sampleSize(avatars, size);
  },
};
