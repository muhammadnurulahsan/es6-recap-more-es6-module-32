const numbers = [5, 7, 13, 41, 23, 78, 30, 5, 2, 1, 13];
const bigNumbers = numbers.filter((number) => number > 20);
const smallNumbers = numbers.filter((number) => number < 10);

console.log(smallNumbers);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "smart watch", price: 500, color: "pink" },
  { name: "smart watch", price: 700, color: "pink" },
  { name: "water glass", price: 10, color: "white" },
];
const expensive = products.filter((product) => product.price > 100);
console.log(expensive);
const black = products.filter((product) => product.color === "black");
const pink = products.find((product) => product.color === "pink");
console.log(pink);