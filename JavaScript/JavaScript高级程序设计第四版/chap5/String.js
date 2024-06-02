// toLowerCase() 方法用于将字符串中的所有大写字母转换为小写字母。

var str = "Hello World";
var newStr = str.toLowerCase();
console.log(`String.toLowerCase(): ${newStr}`); // "hello world"

// toUpperCase() 方法用于将字符串中的所有小写字母转换为大写字母。

var str = "Hello World";
var newStr = str.toUpperCase();
console.log(`String.toUpperCase(): ${newStr}`); // "HELLO WORLD"

// toLocaleLowerCase() 方法用于根据本地语言环境将字符串中的所有大写字母转换为小写字母。

var str = new Date().toLocaleString();
var newStr = str.toLocaleLowerCase();
console.log(`String.toLocaleLowerCase(): ${newStr}`); // "hello world"

// toLocaleUpperCase() 方法用于根据本地语言环境将字符串中的所有小写字母转换为大写字母。

var str = "Hello World";
var newStr = str.toLocaleUpperCase();
console.log(`String.toLocaleUpperCase(): ${newStr}`); // "HELLO WORLD"
