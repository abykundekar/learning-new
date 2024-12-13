/**
 * Class representing a Pizza
 * @param {array} toppings - list of toppings
 * @param {string} crust - type of crust
 * @param {string} size - size of pizza
 */
function Pizza(toppings, crust, size) {
  this.top = toppings;
  this.crust = crust;
  this.size = size;

  this.addTopping = function (top) {
    this.top.push(top);
  };

  console.log(
    `Pizza is ordered with toppings ${this.top.join(
      ","
    )} crust ${crust} and size is ${size}`
  );
}

const p1 = new Pizza(["cheese", "tomato"], "thin", "large");
const p2 = new Pizza(["cheese", "tomato"], "thin", "large");
const p3 = new Pizza(["cheese", "tomato", "pepperoni"], "thik", "small");
console.log(p1);
console.log(p2);
console.log(p3);
p1.addTopping("pepperoni");

class Car {
  constructor(speed, make, model, year, tank_capacity = 0) {
    this.speed = speed;
    this.make = make;
    this.model = model;
    this.year = year;
    this.tank_capacity = tank_capacity;
  }

  static start(car1) {
    console.log(
      `I am starting ${car1.make} ${car1.model} in ${car1.year} tank capacity is ${car1.tank_capacity}`
    );
  }

  drive() {
    console.log(`I am Driving ${this.make} ${this.model} in ${this.year}`);
  }

  stop() {
    console.log(`I am stopping ${this.make} ${this.model} in ${this.year}`);
  }
  static compareSpeed(car1, car2) {
    if (car1.speed > car2.speed) {
      console.log(`${car1.make} is faster than ${car2.make}`);
    } else if (car2.speed > car1.speed) {
      console.log(`${car2.make} is faster than ${car1.make}`);
    } else {
      console.log(`${car1.make} and ${car2.make} have same speed`);
    }
  }
}

const car1 = new Car(200, "Honda", "Civic", 2022, 50);
const car2 = new Car(300, "BMW", "X5", 2022, 100);
const car3 = new Car(400, "Audi", "A4", 2022, 200);
Car.start(car1);
Car.compareSpeed(car1, car2);
console.log("car object is ", car1);
console.log("car object is ", car2);
console.log("car object is ", car3);

class ElecricCar extends Car {
  constructor(battery, time_to_charge, make, model, year) {
    super(make, model, year); // we want only these values from the parent class
    this.battery = battery;
    this.time_to_charge = time_to_charge;
  }
}

const electricCar1 = new ElecricCar(
  "1000vh",
  "3 hours",
  "Honda",
  "Civic",
  2022
);
const electricCar2 = new ElecricCar("1000vh", "3 hours", "BMW", "X5", 2022);
console.log(electricCar1);
