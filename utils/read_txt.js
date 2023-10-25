const fs = require("fs");

module.exports = {
  readTxtFile: (path) => {
    return fs.readFileSync(path).toString().split("\n");
  },
  readTxtFileFillWithSize: (path, size) => {
    const data = fs.readFileSync(path).toString().split("\n");
    const result = data;
    while (result.length < size) {
      result.push(...data);
    }
    return result;
  },
};
