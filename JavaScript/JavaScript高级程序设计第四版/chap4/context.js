let context = {
  contextName: "context",
  age: 25,
};

if (true) {
  let secondaryContext = "secondaryContext";
  with (context) {
    console.log(`secondaryContext: ${secondaryContext}`); // secondaryContext
    console.log(`context.name: ${contextName}`); // context.name
  }
}
