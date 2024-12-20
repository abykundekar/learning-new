let nums = [1, 2, 3, 4, 5];

Array.prototype.myForeach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i);
  }
};
nums.myForeach(function (num) {
  console.log(num);
});
