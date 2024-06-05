// 递归函数
function fatorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * arguments.callee(n - 1);
  // return n * fatorial(n - 1); //fatorial is not a function
}

console.log(`函数声明方式定义函数, 正常调用: ${fatorial(5)}`);

// let fatorialRename = fatorial;
// fatorial = null;
// fatorial is not a function
// console.log(`函数声明方式定义函数, 重命名调用: ${fatorialRename(5)}`);

let renameWhenDefFunc = function (n) {
  if (n === 1) {
    return 1;
  }
  return n * renameWhenDefFunc(n - 1);
};
console.log(`函数表达式方式定义函数, 重命名调用: ${renameWhenDefFunc(5)}`);

// 函数命名表达式
let namedFuncExpr = function k(n) {
  if (n === 1) {
    return 1;
  }
  return n * k(n - 1);
};

console.log(`函数命名表达式方式定义函数, 正常调用: ${namedFuncExpr(5)}`);
