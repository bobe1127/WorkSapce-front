// this
function thisFunc() {
  console.log(`这里的this: ${this}`); // [object global]
}
thisFunc();

function thisFunc2() {
  console.log(`这里的this: ${this}`);
}
let obj = {};
obj.thisFunc2 = thisFunc2;
obj.thisFunc2(); //这里的this: [object Object]

let arrFunc = () => {
  console.log(`箭头函数的this: ${this},json: ${JSON.stringify(this)}`);
};
arrFunc(); // 箭头函数的this: undefined
