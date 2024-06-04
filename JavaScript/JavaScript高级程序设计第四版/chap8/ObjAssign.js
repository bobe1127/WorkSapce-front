let dest = {
  toString() {
    let jsonStr = "{ ";
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== "function") {
        jsonStr += `key: ${key}, value: ${this[key]}, `;
      }
    });
    jsonStr += "}";
    return jsonStr;
  },
};
let source1 = { a: 1, b: 2 };
let source2 = { b: 3, c: 4 };
let assignDest = Object.assign(dest, source1, source2);
console.log(`Object.assign(): ${assignDest}`);
console.log(`Object.assign() return res === dest: ${assignDest === dest}`);
