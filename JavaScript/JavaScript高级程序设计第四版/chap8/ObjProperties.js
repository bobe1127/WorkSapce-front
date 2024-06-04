let notConfigPropObj = {
  name: "notConfigPropObj",
};
console.log(notConfigPropObj.name); // "notConfigPropObj"
notConfigPropObj.name = "alterNotConfigPropObj";
console.log(notConfigPropObj.name); // "alterNotConfigPropObj"
//
let configPropObj = {};
Object.defineProperty(configPropObj, "writableProp", {
  writable: false,
  value: "writableProp",
});
console.log(configPropObj.writableProp); // "writableProp"
configPropObj.writableProp = "alterWritableProp"; // 无用
console.log(configPropObj.writableProp); // "writableProp"
Object.defineProperty(configPropObj, "configurableProp", {
  // configurable: false,
  configurable: true,
  value: "configurableProp",
  enumerable: true,
});
console.log(configPropObj.configurableProp); // "configurableProp"
Object.defineProperty(configPropObj, "configurableProp", {
  // Cannot redefine property: configurableProp
  configurable: true,
  value: "configurableProp",
  enumerable: true,
});
// TypeError:Cannot redefine property: configurableProp
//console.log(configPropObj.configurableProp); // "alterConfigurableProp"
Object.defineProperty(configPropObj, "enumerableProp", {
  enumerable: false,
  value: "enumerableProp",
});
//
console.log(Object.keys(configPropObj));
for (const key in configPropObj) {
  console.log(
    `enumerableProp in configPropObj: ${key},value: ${configPropObj[key]}`
  );
}
//
console.log("访问器属性");
let accessableObj = { name: "accessableObj" };
Object.defineProperty(accessableObj, "prop", {
  get: function () {
    return this.name;
  },
  set: function (value) {
    this.name = value;
    console.log(this);
  },
});

console.log(accessableObj.prop); // "getProp"
accessableObj.prop = "setProp";
console.log(accessableObj.prop); // "setProp"

//
let descs = Object.getOwnPropertyDescriptors(accessableObj);
for (const key in descs) {
  console.log(`key: ${key})}`);
//   for (const val in descs[key]) {
//     console.log(`  ${val}: ${descs[key][val]}`);
//   }
}
