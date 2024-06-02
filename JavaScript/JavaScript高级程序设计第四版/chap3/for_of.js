let arr = [1, 2, 3, 4, 5];
for (const obj of arr) {
  console.log(obj);
}

let resultMap = new Map();
resultMap.set("schema1", () => {
  console.log("schema1");
});
resultMap.set("schema2", () => {
  console.log("schema2");
});
resultMap.set("schema3", () => {
  console.log("schema3");
});
let res = resultMap.get("schema1"); // output: schema1
console.log(res + "");
res();
