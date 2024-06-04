// 普通函数
let func = function (a, b) {
  console.log(
    `参数列表: ${JSON.stringify(arguments)},长度: ${
      arguments.length
    }, 参数列表的类型: ${typeof arguments}`
  );
  arguments[0] = 10;
  arguments[1] = 20;
  // 参数列表中有的和arguments中对应位置的参数有关联关系
  // a: 10, b: 20 10 20
  console.log(`a: ${a}, b: ${b}`, arguments[0], arguments[1]);
  arguments[arguments.length] = "添加的参数";
  console.log(arguments[arguments.length]);
};
func(1, 2, 3, 3, 3, 3, 3);

let arrow = () => {
  // [Arguments] {
  //   '0': {},
  // 此处报错, 箭头函数不能使用 arguments
  console.log(arguments);
};
// arrow();

// 模拟方法重载
let overload = function () {
  let resMap = new Map();
  resMap.set(0, () => {
    return "处理0参数的方法";
  });
  resMap.set(1, () => {
    return "处理1参数的方法";
  });
  resMap.set(2, () => {
    return "处理2参数的方法";
  });
  resMap.set(3, () => {
    return "处理3参数的方法";
  });
  resMap.set(4, () => {
    return "处理4参数的方法";
  });
  return typeof resMap.get(arguments.length) == "undefined"
    ? "没有处理该参数的方法"
    : resMap.get(arguments.length)();
};
console.log(overload());
console.log(overload(1));
console.log(overload(1, 2));
console.log(overload(1, 2, 3));
console.log(overload(1, 2, 3, 4));
console.log(overload(1, 2, 3, 4, 5));
