let nums = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  console.log("this ", this);
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

let ans = nums.myMap(function (num) {
  return num * num;
});

console.log(ans);
