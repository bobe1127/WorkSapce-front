let arr = [1, 2, 3, 4, 5];
console.log(`Array.values(): ${JSON.stringify(arr.values())}`);
let valIterator = arr.values();
// for-of
// for (const item of valIterator) {
//   console.log(`for-of Array.values() item: ${item}`);
// }
let item = valIterator.next();
while (!item.done) {
  console.log(`while Array.values() item: ${item.value}`);
  item = valIterator.next();
}
