async function asyncFunc(second) {
  await setTimeout(() => {
    return Promise.reject();
  }, 1000 * second);
}
let waitResult = asyncFunc(5);
console.log("wait res: ", waitResult); // Promise {<resolved>: 1}
