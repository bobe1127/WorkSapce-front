// 捕获器
let target = { foo: "bar" };
let handler = {
  get() {
    // console.log("get trap called");
    return "handler get method";
  },
};

let proxy = new Proxy(target, handler);
// JavaScript 会尝试将对象转换为字符串，这会调用对象的 toString 方法。
// 由于代理对象的 get 陷阱方法返回了一个字符串，而不是一个函数，
// 所以会导致报错。 TypeError: string "handler get method" is not a function
// console.log(`目标对象: ${target}, 代理对象: ${proxy}`);
console.log(`target.foo: ${target.foo}, proxy.foo: ${proxy.foo}`);
console.log(`target.foo: ${target["foo"]}, proxy.foo: ${proxy["foo"]}`);
console.log(
  `target.foo: ${Object.create(target)["foo"]}, proxy.foo: ${
    Object.create(proxy)["foo"]
  }`
);
