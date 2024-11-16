let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const heads = Math.random() >= 0.5;
    if (heads) {
      resolve("yes we got the heads");
    } else {
      reject("oh oh we got tails");
    }
  });
});

promise.then(function (message) {
  console.log("its win with message ", message);
});
promise.catch(function (message) {
  console.log("its lose ", message);
});

promise.finally(function () {
  console.log("we have to settle");
});
