console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`); // 2^53 - 1
console.log(`Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}`); // -2^53 + 1
// toExponential() 方法返回数字的指数形式。
console.log(`(123456789).toExponential(): ${(123456789).toExponential()}`); // "1.23456789e+8"
// toFixed() 方法返回数字的固定小数形式, 并可指定小数点后的位数, 超出位数的部分将被四舍五入。
console.log(`(123456789).toFixed(2): ${(123456789.12349).toFixed(4)}`); // "123456789.00"
// toPrecision() 方法返回数字的指定长度的字符串形式。
console.log(`(123456789).toPrecision(5): ${(123456789).toPrecision(5)}`); // "123460000"
