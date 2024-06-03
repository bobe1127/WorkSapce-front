// 创建
let newArr = new Array(1, 2, 3, 4, 5);
let constArr = [1, 2, 3, 4, 5];
console.log(`new数组:${newArr}, const数组:${constArr}`);

// 空位undefined不全
let emptyArr = [1, , , , , , 1];
// 当数组为空时，forEach 不会执行回调函数。
// 要让 forEach 执行回调函数，确保数组中有元素。
emptyArr.forEach((item, idx) => {
  console.log(
    `第${idx + 1}个元素:${item}, 是否为undefined:${item === undefined}, 长度:${
      emptyArr.length
    }`
  );
});
emptyArr[emptyArr.length] = "add";
console.log(emptyArr, emptyArr.length);

// 是否为数组
console.log(`{} 是否为数组: ${Array.isArray({})}`);
console.log(`[] 是否为数组: ${Array.isArray([])}`);
console.log(`new Array() 是否为数组: ${Array.isArray(new Array())}`);

// 数组遍历
let forEachArr = [1, 2, 3, 4, 5];
let feKeys = forEachArr.keys();
console.log(`Array.keys(): ${feKeys}, JSON: ${JSON.stringify(feKeys)}`);
// for of 遍历
// for (const item of feKeys) {
//   console.log(`forEachArr item: ${item}`);
// }

// next().value
// console.log(`iterator.next() and value:,${JSON.stringify(feKeys.next())}`);
// console.log(`iterator.next() and value:${JSON.stringify(feKeys.next())}`);
// console.log(`iterator.next() and value:${JSON.stringify(feKeys.next())}`);
// console.log(`iterator.next() and value:${JSON.stringify(feKeys.next())}`);
// console.log(`iterator.next() and value:${JSON.stringify(feKeys.next())}`);
// console.log(`iterator.next() and value:${JSON.stringify(feKeys.next())}`);
// while
// let item = feKeys.next();
// while (!item.done) {
//   console.log(`JSON item: ${JSON.stringify(item)}`);
//   item = feKeys.next();
// }
// Array Iterator 对象没有 forEach 方法
// feKeys.forEach((item) => {
//   console.log(`forEach item: ${item}n`);
// }); 错误代码
