function varfunc() {
  if (true) {
    var x = 10;
    // function scope
    console.log(x);
    // global scope
    global = "global";
  }
  console.log(x);
}
varfunc();
console.log(global);

// console.log(x);  ReferenceError: x is not defined

// let
function letfunc() {
  if (true) {
    let x = 10;
    // block scope
    console.log(x);
  }
  // console.log(x); // ReferenceError: x is not defined
}
letfunc();

let repeat = "repeat";
// var repeat = "no-repeat"; // Identifier 'repeat' has already been declared
// console.log(this);
console.log(typeof udVar);
if (typeof udVar === "undefined") {
  udVar = "udVar";
}
console.log(udVar);

// var let in for()
for (var i = 0; i < 3; i++) {
  console.log(`var i = ${i}`);
}
console.log(`after var i = ${i}`);
for (let j = 0; j < 3; j++) {
  console.log(`let j = ${j}`);
}
// console.log(`after let j = ${j}`); // ReferenceError: j is not defined

for (var k = 0; k < 3; k++) {
  // settimeout会被放入任务队列中  => 具体参考 事件循环 有关知识
  setTimeout(() => {
    console.log(k); // 3,3,3 而不是 0 1 2
  }, 0);
}

for (let l = 0; l < 3; l++) {
  setTimeout(() => {
    console.log(l); // 0 1 2
  }, 0);
}
