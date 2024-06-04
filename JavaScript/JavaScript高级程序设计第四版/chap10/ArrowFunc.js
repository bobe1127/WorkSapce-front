// 箭头函数
let arrowFunc = (a, b) => {
  return "arrowFunc result: " + (a + b);
};

console.log(arrowFunc(1, 2));

// 函数名即指针
let newArrowFuncName = arrowFunc;
console.log(newArrowFuncName(3, 4));
console.log(newArrowFuncName.name);


