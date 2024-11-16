let radiusArr = [1, 2, 3, 4];
let area = [];
let circum = [];
let dia = [];

function areaC(radius) {
  return 3.142 * radius * radius;
}

function circumC(radius) {
  return 3.142 * radius * 2;
}
function diaC(radius) {
  return radius * 2;
}
function calculate(radArray, cb) {
  let data = [];
  for (let i = 0; i < radArray.length; i++) {
    data.push(cb(radArray[i]));
  }
  return data;
}

console.log("area ", calculate(radiusArr, areaC));
console.log("circumstances ", calculate(radiusArr, circumC));
console.log("diameter ", calculate(radiusArr, diaC));
