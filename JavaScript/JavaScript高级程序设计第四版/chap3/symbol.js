// 第3章 基本概念 3.2 Symbol类型

// Symbol类型是ES6新增的数据类型，它是一种基本类型，用于创建独一无二的值。
// 它是一种类似于字符串的类型，但是它是不可改变的，而且它可以作为对象属性的标识符。
// 它可以用来作为对象的属性键，也可以用来创建对象的私有属性。
let symbol = Symbol("foo");
console.log(symbol); // Symbol(foo)
let forSymbol = Symbol.for("foo");
console.log(forSymbol); // Symbol(foo)
console.log(forSymbol === symbol); // true
let symbol2 = Symbol.for("foo1");
console.log(symbol2); // Symbol(foo1)
console.log(symbol2 === symbol); // false
console.log(symbol2 === forSymbol); // false
let keyForFoo1 = Symbol.keyFor(symbol);
console.log(keyForFoo1); // "foo1"

let symbolObj = {
  [symbol]: "value",
  [forSymbol]: "value1",
};
console.log(symbolObj);
for (const o of symbolObj) {
  console.log(o);
}
