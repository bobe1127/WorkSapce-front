let target = {
  id: "target",
};

let handler = {};

let proxy = new Proxy(target, handler);
proxy.newProp = "newProp in proxy";
console.log(`target: ${JSON.stringify(target)}, 
proxy:${JSON.stringify(proxy)}`);
console.log(`target == proxy: ${target == proxy},
target.id == proxy.id: ${target.id == proxy.id}`); // true
