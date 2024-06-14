try {
  throw new Error("正常错误");
} catch (e) {
  console.log(e);
}

try {
  Promise.reject(new Error("期约中错误")).catch((e) => {
    console.log(`期约中出现错误...`, e);
  });
} catch (error) {
  // 这里没有执行
  // UnhandledPromiseRejectionWarning: Error: 期约中错误
  //拒绝期约的错误并没有抛到执行同步代码的线程里，而是通过浏览器异步消息队
  //   列来处理的;
  console.log(`期约中出现错误...`);
  console.log(`Promise.reject: ${error}`);
}

Promise.resolve().then(() => {
  console.log("OnResolve handler");
});
console.log("then() returns");
/**
 * Error: 正常错误
 * then() returns
    期约中出现错误... Promise.reject: Error: 期约中错误
    OnResolve handler
 */
// 主线程中的代码先执行，然后遇到Promise.reject，将其放入消息队列，然后继续执行主线程中的代码，
