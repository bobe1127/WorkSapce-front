// 暂时性死区
/**
 * ReferenceError: Cannot access 'sec' before initialization
 * 前面引用后面, 前面必须传值否则报错
 * @param {*} pre pre
 * @param {*} sec sec
 */
function deadZone(pre = sec, sec) {
  console.log(`默认值参数也有自己的作用域, 定义在前的参数不能用后面的`);
}
// deadZone(); // 输出: 1

// 后面引用前面, 可以
function noDeadZone(pre, sec = pre) {
  console.log(`后面引用前面, 可以, pre:${pre}, sec:${sec}`);
}
noDeadZone(1); // 输出: pre:1, sec:1

// 参数有自己的作用域, 不能使用函数作用域中的变量
function actionField(param = paramInFuncBlock) {
  let paramInFuncBlock = "paramInFuncBlock";
  console.log(
    `参数不能使用函数作用域中的变量, paramInFuncBlock:${paramInFuncBlock}`
  );
}
// ReferenceError: paramInFuncBlock is not defined
//     at actionField
// actionField();
actionField("param"); // 输出: paramInFuncBlock:param
