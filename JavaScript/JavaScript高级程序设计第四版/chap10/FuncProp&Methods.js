// 函数属性/方法
function func() {
  console.log(`函数的属性: prototype: ${func.prototype},
  length: ${func.length}, name: ${func.name}`);
}
func();

//函数方法 apply call bind
function method(...args) {
  console.log(`函数方法: ${args}, this: ${this}`);
}
function applyMethod() {
  method.apply({}, arguments);
}
applyMethod(1, 2, 3);

function callMethod(...args) {
  method.call(this, args);
}
callMethod(1, 2, 3);

let obj = function () {};
let bindMethod = method.bind(obj, 1, 2, 3);
bindMethod();
