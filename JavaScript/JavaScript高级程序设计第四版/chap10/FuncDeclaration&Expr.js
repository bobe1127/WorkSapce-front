// 函数声明 函数表达式
// declaration
console.log(`函数声明提升: ${funcDeclaration()}`);
function funcDeclaration() {
  return `函数定义: 声明方式`;
}

// // ReferenceError: Cannot access 'funcExpr' before initialization
// console.log(`函数声明不能提升: ${funcExpr}`);
let funcExpr = function () {
  return `函数定义: 表达式方式`;
};

// 函数名即变量
function add10(func, args) {
  if (typeof func !== "function") {
    throw new Error("func is not a function");
  }
  return func(args);
}

function tobeCallFunc(args) {
  return JSON.stringify(args);
}
console.log(add10(tobeCallFunc, [1, 2, 3]));
// console.log(add10({}, [1, 2, 3]));
