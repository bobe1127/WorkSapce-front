/**
 *  @description 判断对象是否是原始类型
 * @param {*} obj
 * @returns  {boolean}
 */
function isPrimitive(obj) {
  return typeof obj !== "object" && typeof obj !== "function";
}

console.log({} instanceof Object);
console.log([] instanceof Object);
console.log(new Boolean(true) instanceof Boolean);
console.log(isPrimitive(123));
console.log(isPrimitive({}));
