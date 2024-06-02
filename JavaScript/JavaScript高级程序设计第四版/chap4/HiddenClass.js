function Article() {
  this.title = "Inauguration Ceremony Features Kazoo Band";
  this.author = "Jake";
}
let a1 = new Article();
let a2 = new Article();

console.log(`a1 == a2: ${a1 == a2}`);
a1.author = "John";
console.log(`a1.author: ${a1.author}`);
console.log(`a2.author: ${a2.author}`);
