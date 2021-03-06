// контсруктор Car
function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;

  this.started = false;

  this.start = function () {
    this.started = true;
  }

  this.stop = function () {
    this.started = false;
  }

  this.drive = function () {
    if (this.started) {
      console.log(this.make + ' ' + 'Zoom, Zoom')
    } else {
      console.log('You need to start thr engine first');
    }
  }
}

// создаем конструктор Dog
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  // добавляем метод
  this.bark = function () {
    if (this.weight > 25) {
      alert(this.name + " says Woof!")
    } else {
      alert(this.name + " says Yip!")
    }
  }
}

// Создаем объектные литералы
var limoParams = {
  make: "Webville Motors",
  model: "limo",
  year: 1983,
  color: "black",
  passengers: 12,
  convertible: true,
  mileage: 21120
};
var cadiParams = {
  make: "Gm",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
};


// вызов конструктора Car
var limo = new Car(limoParams);

var cadi = new Car(cadiParams);

// вызов конструктора Dog
var limoDog = new Dog('Rhapsody In Blue', 'Poodle', 40);

if (cadi instanceof Car) {
  console.log("Congrats, it's a Car!");
}

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);