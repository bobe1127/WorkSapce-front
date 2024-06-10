function chainPromise(str) {
  return new Promise((resolve, reject) => {
    console.log(str);
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
// promise chain 使用, 上一个promise的结果作为下一个promise的参数
chainPromise("first")
  .then(() => chainPromise("second"))
  .then(() => chainPromise("third"))
  .then(() => console.log("done"));
