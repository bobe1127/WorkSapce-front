let target = { foo: "target", name: "targetName" };
let handler = {
  get(trapTarget, properties, reciver) {
    console.log(trapTarget);
    console.log(properties);
    console.log(reciver);
    // return trapTarget[properties] + "被代理处理了";
    // console.log("argument", ...arguments);
    return Reflect.get(...arguments) + "被代理了";
  },
  set(trapTarget, properties, value, reciver) {
    console.log("lllllllllllllllll");
    console.log(trapTarget);
    console.log(properties);
    console.log(value);
    console.log(reciver);
    return Reflect.set(...arguments);
  },
};
let proxy = new Proxy(target, handler); // 和下面等价, 你不做任何操作的话
// let proxy = new Proxy(target, Reflect);`
proxy.foo = "proxy";
console.log(`target.foo: ${target.foo}, proxy.foo: ${proxy.foo}`);
