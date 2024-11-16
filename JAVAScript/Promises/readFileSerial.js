const fs = require("fs");
console.log("start");

let promiseReadFile1 = fs.promises.readFile("f1.txt");
let promiseReadFile2 = fs.promises.readFile("f2.txt");
let promiseReadFile3 = fs.promises.readFile("f3.txt");

promiseReadFile1
  .then(function (data) {
    console.log("reading file 1 as " + data);
    return promiseReadFile2;
  })
  .then(function (data) {
    console.log("reading file 2 as " + data);
    return promiseReadFile3;
  })
  .then(function (data) {
    console.log("reading file 3 " + data);
  })
  .catch(function (err) {
    console.log("Error while reading the file ", err);
  })
  .finally(function () {
    console.log("serial reading the file is settled ");
  });
// promiseReadFile1
//   .then(function (data) {
//     console.log("This is file 1 data -> " + data);
//     return promiseReadFile2;
//   })
//   .then(function (data) {
//     console.log("This is file 2 data -> " + data);
//     return promiseReadFile3;
//   })
//   .then(function (data) {
//     console.log("This is file 3 data -> " + data);
//   })

//   .catch(function (err) {
//     console.log("This is Your Error -> " + err);
//   });

console.log("End");
