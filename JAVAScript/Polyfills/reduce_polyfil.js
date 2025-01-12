let nums = [1, 2, 3, 4, 5];
let res = nums.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(res);

Array.prototype.myreduce(function (cb, acc) {
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
});

let result = arr.myReduce((acc, value) => {
  return acc + value;
}, 0);
console.log("reduce result is ", result);
