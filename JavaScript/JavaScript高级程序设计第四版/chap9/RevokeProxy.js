// 中断代理
let obj = { name: "中断代理" };
let handler = {
  get(proxyTarget, property, receiver) {
    return proxyTarget[property] + ", 被代理了";
  },
};

let { proxy, revoke } = Proxy.revocable(obj, handler);
console.log(proxy.name);
revoke();
// revoke(); // 撤销函数（ revoke()）是幂等的，调用多少次的结果都一样
// Cannot perform 'get' on a proxy that has been revoked
console.log(proxy.name);
