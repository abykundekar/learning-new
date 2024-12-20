let nums = [1, 2, 3, 4, 5];
let res = nums.filter(function (num) {
  return num > 1;
});
console.log(res);

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
