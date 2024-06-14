// setTimeOut()
setTimeout(() => {
  console.log("setTimeOut(), 只执行一次");
}, 3000);

let maxIntervalCount = 5;
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`setInterval(), 执行${count}次`);
  if (count >= maxIntervalCount) {
    clearInterval(intervalId);
  }
}, 2000);
