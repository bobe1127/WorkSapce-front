function previousAscyn(value, timeout) {
  setTimeout(() => {
    console.log(`我有结果啦: ${value * 2}`);
  }, timeout);
}
previousAscyn(2, 1000);
// 上面耗时操作不会阻塞
console.log("我先执行");
