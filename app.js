// // Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // Create An array of Names
// const namesArr = ["Salaam", "Roosevelt", "Shaq"];
// // Init Iterator and pass in names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// GENERATOR EXAMPLE - must put asterisk to tell JS that it's a Generator
// function* sayName() {
//   yield "Salaam";
//   yield "Roosevelt";
//   yield "Shaq";
//   yield "Ant";
// }

// const name = sayName();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID CREATOR
// function* createIds() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
