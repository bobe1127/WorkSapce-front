// new Obj
let obj = new Object({ name: "Eddie", age: 25 });
// {}
let constObj = { name: "Eddie", age: 25 };
console.log(
  `new Object: ${obj.toString()}, jsonString: ${JSON.stringify(obj)}`
);
console.log(`{} obj: ${constObj}, jsonString: ${JSON.stringify(constObj)}`);

console.log(`点语法获取属性值: ${obj.name}, 中括号法获取属性值: ${obj["age"]}`);

// []添加属性
obj["city"] = "Guangzhou";
console.log(`${JSON.stringify(obj)}`);
