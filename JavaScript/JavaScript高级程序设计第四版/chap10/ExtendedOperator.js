// 扩展运算符
// 按位传参, 剩余放到拓展操作符
function extendedFunc(param, ...params) {
  // function extendedFunc(...params,param) { //A rest parameter must be last in a parameter list
  console.log(`拓展运算符获得的参数列表: ${JSON.stringify(params)},
    arguments: ${JSON.stringify(arguments)},
    firstParam: ${param}`);
}
// arguments 是一个List<map>
// ...values 是个数组
extendedFunc(1, 2, 3, 4);

let arrowFunc = (...values) => {
  console.log(
    `箭头函数用拓展运算符弥补不能使用arguments的不足:${JSON.stringify(values)}`
  );
};
arrowFunc(1, 2, 3, 4, 54);
