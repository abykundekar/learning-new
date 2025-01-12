/** Promise chaining */
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

console.log("End");

function cb1(data) {
  console.log("first file" + data);
  return promiseReadFile2;
}

function cb2(data) {
  console.log("second file " + data);
  return promiseReadFile3;
}

function cb3(data) {
  console.log("third file data " + data);
}

promiseReadFile1.then(cb1).then(cb2).then(cb3);
