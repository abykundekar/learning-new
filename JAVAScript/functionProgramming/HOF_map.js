let arr = [1, 2, 3, 4];

//calculate square

function getSquare(num) {
  return num * num;
}

let result = arr.map(getSquare);
//or
let result1 = arr.map(function (num) {
  return num * num;
});
console.log("result is " + result + " and " + result1);
