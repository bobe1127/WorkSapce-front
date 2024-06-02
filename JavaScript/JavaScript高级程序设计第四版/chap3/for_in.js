let obj = {
  name: "John",
  age: 30,
  city: "New York",
  [Symbol("key")]: "value",
};
// 使用for...in循环遍历对象属性
// 属性的Symbol键不会被遍历到
for (const key in obj) {
  /**
     *  name : John
        age : 30
        city : New York 
     */
  console.log(key + " : " + obj[key]);
}
