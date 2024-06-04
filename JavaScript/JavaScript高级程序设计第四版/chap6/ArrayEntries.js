let arr = [1, 2, 3, 4, 5];
let entries = arr.entries();
// for-of
// for (let item of entries) {
//   console.log(
//     `for-of Array.Entries() item: idx: ${item}, json: ${JSON.stringify(item)}`
//   );
// }
// for-of k-v
for (const [idx, item] of entries) {
  console.log(`for-of Array.Entries() item: idx: ${idx}, value: ${item}`);
}
// 只有数组有forEach方法
arr.forEach((value, idx) => {
  console.log(`forEach Array.Entries() item: idx: ${idx}, value: ${value}`);
});
