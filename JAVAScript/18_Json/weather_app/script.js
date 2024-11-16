const form = document.querySelector("form");
const searchData = document.querySelector(".searchField");

form.addEventListener("submit", searchCity);

function searchCity(e) {
  e.preventDefault();
  console.log("city is ", searchData.value);
}
