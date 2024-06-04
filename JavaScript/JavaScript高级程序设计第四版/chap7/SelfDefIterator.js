// 自定义迭代器
class SelfDefIterator {
  constructor(limit) {
    this.count = 1;
    this.limit = limit;
  }

  /**
   *迭代器协议
   * @returns 实现next()方法
   */
  next() {
    if (this.count <= this.limit) {
      return { value: this.count++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }

  /**
   * 可迭代协议: 实现Symbol.iterator()方法
   * @returns
   */
  [Symbol.iterator]() {
    return this;
  }
}

let selfDefIterator = new SelfDefIterator(5);
for (const item of selfDefIterator) {
  console.log(`selfDefIterator item: ${item}`);
}

for (const item of selfDefIterator) {
  // 第二次迭代, 没有结果输出 console.log(`selfDefIterator item: ${item}`);
  console.log(`second time iterate, selfDefIterator item: ${item}`);
}
let selfDefIterator2 = new SelfDefIterator(5);
for (const item2 of selfDefIterator2) {
  console.log(`selfDefIterator2 item: ${item2}`);
}

class SelfDefIterator2 {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1;
    let limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { value: count++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

let selfDefIterator3 = new SelfDefIterator2(5);
for (const item3 of selfDefIterator3) {
  console.log(`selfDefIterator3 item: ${item3}`);
}
// d第二次迭代已迭代对象, 有输出
for (const item3 of selfDefIterator3) {
  console.log(`second time iterate, selfDefIterator3 item: ${item3}`);
}
