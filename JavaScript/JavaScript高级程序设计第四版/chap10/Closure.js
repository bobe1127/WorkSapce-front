// 闭包
this.id = "global";
let obj = {
  id: "Obj",
  getId() {
    console.log(`obj.getId().this : ${this}`);
    return function () {
      console.log(`obj.getId().anonymousFunc.this : ${this}`);
      return this.id;
    };
  },
};
console.log(`obj.getId(): ${obj.getId()()}`); // obj.getId(): undefined
let obj1 = {
  id: "Obj1",
  name: "obj1_name",
  getId() {
    let that = this;
    console.log(`obj.getId().this : ${this}`);
    return function () {
      console.log(`obj1.getId().anonymousFunc.this : ${that === obj1}`);
      return that.id;
    };
  },
};
console.log(`obj1.getId(): ${obj1.getId()()}`); // obj1.getId(): Obj1
