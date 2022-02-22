const fish = {
  id: 85,
  name: "king Hilsha",
  price: 458,
  phone: 01254564,
  address: "Chandpur",
  dress: "silverr",
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;
console.log(phone);
console.log(price);
console.log(dress);
console.log(fish.phone);

// const person = [{ singer: "Atif aslam", address: "23 something street" }];
// console.log(person.address);

const company = { name: "GP",
  ceo: { id: 02, name: "Ajmol", food: "fucka" },
  web: { work: "website development", employee: 22, framework: "react" },
  tech: { first: "html", second: "css", third: "js" },
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);
