module.exports = class AbstractSchema {
  constructor(schema) {
    this.schema = schema;
  }

  generate(size) {
    let result = [];
    Object.keys(this.schema).map((fieldName) => {
      let samples = [];
      if (typeof this.schema[fieldName] === "function") {
        samples = this.schema[fieldName](size);
      } else {
        samples = Array.from(Array(size)).map(() => this.schema[fieldName]);
      }
      samples.map((value, index) => {
        if (result.length <= index) result.push({});
        result[index][fieldName] = value;
      });
    });

    return result;
  }
};
