const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise has beedn resolved");
  }, 5000);
});

function getData() {
  p1.then(function (message) {
    console.log(message);
  });
}
getData();
async function handlePromise() {
  console.log("Hello");
  let val = await p1; //it will execute first then only control goes below
  console.log("scaler");
  console.log(val);
  return val;
}

handlePromise();
