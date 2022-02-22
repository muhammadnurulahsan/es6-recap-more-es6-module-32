// 1. let and const
const hubby = "Ahmad";
const phone = "iPhone 13Pro";
phone = "samsung s15";

// 2. default parameter || spreed operator
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. Backtick template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`;

// 4. arrow function
function square(x) {
  return x * x;
}
const square = (x) => x * x;
console.log(square(9));
