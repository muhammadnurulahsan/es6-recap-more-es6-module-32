const friends = ["Tom Hanks", "John Smith", "Tom cruise"];

const friendsLength = friends.map((friend) => friend.length);
console.log(friendsLength);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "smart watch", price: 500, color: "pink" },
  { name: "water glass", price: 10, color: "white" },
];
const productsNamed = products.map((product) => product.name);
const productsPrice = products.map((product) => product.price);
console.log(productsNamed);
console.log(productsPrice);
products.map((product) =>console.log(product));

products.forEach((product) => console.log(product));











