// 函数内部
// 1.arguments.callee
function func(val) {
  if (val <= 1) {
    // console.log(`func === arguments.call: ${func === arguments.callee}`);
    return val + ". end";
  } else {
    // return val + func(val - 1);// =和下面等价
    // arguments.callee() === func()
    return val + arguments.callee(val - 1);
  }
}
console.log(`func res: ${func(10)}`); // ", 3, 2, 1. end"

// 2.caller
(() => {
  console.log("箭头函数的caller", this.caller); // undefined
})();

(function callerFunc() {
  console.log("函数的caller", callerFunc.caller); // [Function (anonymous)]
})();

let obj = {};

obj.callerFunc = function () {
  console.log("对象的caller", this.caller);
};
obj.callerFunc();

// 3.new.target
function newFunc() {
  console.log("new.target", new.target); // newFunc
}
newFunc();
new newFunc(); // newFunc, 被调用的构造函数
