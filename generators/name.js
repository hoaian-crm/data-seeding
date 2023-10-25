const _ = require("lodash");
const { readTxtFileFillWithSize } = require("../utils/read_txt");

module.exports = {
  nameGenerator: (size) => {
    const names = readTxtFileFillWithSize("lists/name.txt", size);
    return _.sampleSize(names, size);
  },
};
