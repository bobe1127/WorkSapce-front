console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof Boolean: ${typeof Boolean}`);
console.log(`typeof Number: ${typeof Number}`);
console.log(`typeof String: ${typeof String}`);
console.log(`typeof Symbol: ${typeof Symbol}`);
console.log(`typeof Null: ${typeof null}`);
/**
 * result :
 *  typeof undefined: undefined
    typeof Boolean: function
    typeof Number: function
    typeof String: function
    typeof Symbol: function
    typeof Null: object
 */
let ud;
console.log(typeof ud);
// 注意下面两者的区别
console.log(typeof udVar); // undefined;
// console.log(udVar); // udVar is not defined

// undefined <=> Boolean
let b;
console.log(typeof b);
let booleanB = !b;
console.log(typeof booleanB, booleanB); // boolean true

// NaN  => compare result is all false
console.log(typeof NaN);
console.log(undefined == NaN);
console.log(false == NaN);
console.log("string" == NaN);
console.log(null == NaN);

// => to Number
console.log(`Number(null) = ${Number(null)}`); // Number(null) = 0
console.log(`Number(null) = ${Number({})}, valueOf({}) = ${{}.valueOf()}`); //Number(null) = NaN
// parseInt
console.log(`parseInt(null) = ${parseInt(null)}`); // parseInt(null) = 0
console.log(`parseInt(null) = ${parseInt({})}, valueOf({}) = ${{}.valueOf()}`); //parseInt(null) = NaN
// parseFloat
console.log(`parseFloat(null) = ${parseFloat(null)}`); // parseFloat(null) = 0.0
console.log(
  `parseFloat(null) = ${parseFloat({})}, valueOf({}) = ${{}.valueOf()}`
); //parseFloat(null) = NaN

console.log("标签函数=-=======");
let first = 6;
let sec = 9;

function simpleTag(strings, firstExpr, secExpr, sumExpr) {
  console.log(strings);
  console.log(firstExpr);
  console.log(secExpr);
  console.log(sumExpr);
  return "taggedFunction";
}
let untaggedRes = `${first} + ${sec} = ${first + sec}`;
let taggedRes = simpleTag`${first} + ${sec} = ${first + sec}`;
console.log(untaggedRes);
console.log(taggedRes);
