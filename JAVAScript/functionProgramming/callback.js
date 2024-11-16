function printNameWithAge(name, cb, cb2) {
  console.log("name is " + name);
  cb(15);
  cb2("Kundekar");
}

function printAge(age) {
  console.log("and the age is " + age);
}

function printLastName(lastName) {
  console.log("last name is ", lastName);
}

printNameWithAge("abhijeet", printAge, printLastName);
