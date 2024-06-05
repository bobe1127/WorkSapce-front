//捕获器不变式
let target = {}
Object.defineProperty(target, "name", {
    value: "target",
    writable: false,
    configurable: false
})
let handler = {
    get() {
       return "trap proxy name"; 
    }
}
let proxy = new Proxy(target, handler);
// TypeError: 'get' on proxy: property 'name' is a read-only
//  and non - configurable data
//  property on the proxy target but the proxy did not
// return its actual value(expected 'target' but got 'trap proxy name')
console.log(`target.name: ${target.name}, proxy.name: ${proxy.name}`)