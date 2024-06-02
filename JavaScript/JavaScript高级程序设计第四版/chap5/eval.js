eval("console.log('Hello, World!')");
eval("function consoleLog(){console.log('Hello, World!')}");
consoleLog();

try {
  throw new Error("Error occurred!");
} catch (e) {
  console.error(`e.message : ${e.message}, e : ${e}, e.stack : ${e.stack}`);
}
