const arr = [1, 2, 3, 4];
//arr.forEach((value, index) => console.log("valuea ", value, index));

Array.prototype.myForeach = function (cb) {
  if (typeof cb !== "function") throw new Error("its not a callback function");
  const arr = this;
  for (let i = 0; i < this.length; i++) {
    cb(arr[i], i);
  }
};

//arr.myForeach((value, index) => console.log("value ", value, index));
Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") throw new Error("this is not a Funtion ");

  const arr = this;
  const retArray = [];
  for (let i = 0; i < arr.length; i++) {
    const res = cb(arr[i], i);
    retArray.push(res);
  }
  return retArray;
};

const arr3 = arr.myMap((value) => value * 3);
//console.log("new array ", arr3);

//Filter
Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") throw new Error("not a funtion");
  const arr = this;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) res.push(arr[i]);
  }
  return res;
};
const arr4 = arr.filter((value) => value > 1);
//console.log("filtered result is ", arr4);

//Reduce
let res = arr.reduce((acc, value) => {
  return acc + value;
}, 0);

Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb != "function") throw new Error("error");
  let acc = initialValue;
  const array = this;
  for (let i = 0; i < array.length; i++) {
    acc = acc ? cb(acc, array[i]) : array[i];
  }

  return acc;
};

let res1 = arr.myReduce((acc, value) => {
  return acc + value;
}, 0);
//console.log("reduce1 result is ", res1);

/* Slice */
let str = ["abcd", "efgh", "lkalk", "qqqq", "tttt"];

Array.prototype.mySlice = function (start, end) {
  let startIndex = start ? start : 0;
  let endIndex = end ? end : this.length;
  let res = [];
  if (start < 0) startIndex = Math.max(startIndex + this.length, 0);
  if (end < 0) endIndex = Math.max(endIndex + this.length, 0);
  for (let i = startIndex; i < endIndex; i++) {
    res.push(this[i]);
  }
  return res;
};

let strArray = str.mySlice(-1, 3);
//console.log("strr array is ", strArray);

/* Flatten */
const fArray = [1, 2, [3, 4, 5, [7, 8, [9, 10]]]];
let flatArray = fArray.flat();
//console.log("flat array ", fArray.flat());
Array.prototype.customFlat = function (level = 1) {
  let result = [];
  function flatten(array, currentLevel) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && currentLevel < level) {
        flatten(array[i], currentLevel + 1);
      } else {
        result.push(array[i]);
      }
    }
  }
  flatten(this, 0);

  return result;
};

flatArray = fArray.flat();
//console.log("flat array ", fArray.customFlat(5));

