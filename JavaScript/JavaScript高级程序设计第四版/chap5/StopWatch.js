function StopWatch() {
  let startTime = 0;
  let endTime = 0;

  /**
   * 
使用 methodName: () => {...} 这种语法来定义对象方法是错误的，
因为这是对象字面量中定义方法的语法
，而在构造函数中定义方法需要使用不同的语法。
   */
  //   start: () => {
  //     startTime = Date.now();
  //   };
  this.start = function () {
    startTime = Date.now();
  };
  //   stop: () => {
  //     endTime = Date.now();
  //   };
  this.stop = function () {
    endTime = Date.now();
  };

  //   spendTime: () => {
  //     return endTime - startTime;
  //   };
  this.spendTime = function () {
    return endTime - startTime;
  };
}

let sw = new StopWatch();
sw.start();
for (let i = 0; i < 100000; i++) {
  console.log(i);
}
sw.stop();
console.log(`sw.spendTime() = ${sw.spendTime() / 1000}s`);
