let dog = {
  name: "sparky"
};
let black_dog = {
  name: "blacky"
};

const x16 = dog;
x16 = black_dog;
console.log(x16); // dog

// let dog = {
//   name: "sparky"
// };
// let black_dog = {
//   name: "blacky"
// };

// const x16 = dog;
// dog.name = "blacky";
// console.log(x16); // dog