const incButton = document.querySelector("#increment");
const decButton = document.querySelector("#decrement");
const count = document.querySelector("#count");
const reset = document.querySelector("#reset");
let counter = 0;
incButton.addEventListener("click", function () {
  count.innerText = ++counter;
});

decButton.addEventListener("click", function () {
  count.innerText = counter === 0 ? 0 : --counter;
});

reset.addEventListener("click", function () {
  count.innerText = 0;
  counter = 0;
});
