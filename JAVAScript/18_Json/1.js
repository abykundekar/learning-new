const toys = {
  toy1: { name: "pikachu", food: "noodles" },
  toy2: { name: "monkey", food: "banana" },
  toy3: { name: "doremon", food: "cake" },
};

const jsond = JSON.stringify(toys);

const obj = JSON.parse(jsond);

console.log(toys);
console.log("json ", jsond);
console.log("back to obj ", obj);
