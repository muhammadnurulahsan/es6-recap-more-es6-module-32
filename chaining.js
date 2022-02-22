//declare variable based on the name of an object property.
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x, b);
// console.log('My Object:', myObject?.p?.q);

// destructuring array
const [p, q] = [45, 37, 91, 86];
console.log(p, q);

const [best, faltu] = ["Nurul", "Ahsan"];
console.log(best, faltu);

const { sky, soil, money, color } = {
  sky: "blue",
  soil: "mati",
  color: "black",
  money: 450,
};

// chaining
const company = {
  name: "GP",
  ceo: { id: 02, name: "Ajmol", food: "fucka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: { first: "html", second: "css", third: "js" },
  },
};


console.log(company.web.tech.third);
console.log(company?.backend?.tech.third);
