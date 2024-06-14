// promise method方法
let resPromise = Promise.resolve("resPromise");
let rejPromise = Promise.reject("rejPromise");
console.log("resPromise: ", resPromise);
console.log("rejPromise: ", rejPromise);
resPromise
  .then((res) => {
    console.log("resPromise成功回调", res);
  })
  .catch((e) => {
    console.log("resPromise失败回调", e);
  })
  .finally((res) => {
    console.log("resPromise最终回调", res);
  });

rejPromise
  .then((res) => {
    console.log("rejPromise成功回调", res);
  })
  .catch((e) => {
    console.log("rejPromise失败回调", e);
  })
  .finally((res) => {
    console.log("rejPromise最终回调", res);
  });
