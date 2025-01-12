let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("task is resolved after 3 seconds");
  }, 3000);
});
async function fetchData() {
  console.log("before await called");
  const a = await promise;
  console.log("a is ", a);
  return await "done";
}

// fetchData().then(function (data) {
//   console.log("last task is " + data);
// });

async function fectchData2() {
  console.log("start");
  let first = await promise;
  console.log("first task");
  console.log(first);
  let sec = await promise; //as the promise has been already resolved so it will not again for 3 seconds
  console.log("second task");
  console.log(sec);
}

fectchData2();
