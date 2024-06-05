function PrivilegeFunc() {
  let privateVar = "This is a private variable";
  let privateFunc = function () {
    console.log("This is a private function");
  };
  this.accessPrivateInfoFunc = function () {
    console.log(`我是特权方法, 我能访问私有变量 : ${privateVar}`);
    privateFunc();
  };
}
let privilegeObj = new PrivilegeFunc();
console.log(`尝试访问私有变量: ${privilegeObj.privateVar}`); // 尝试访问私有变量: undefined
privilegeObj.accessPrivateInfoFunc(); // 我是特权方法, 我能访问私有变量 : This is a private variable

