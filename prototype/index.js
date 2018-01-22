// создаем конструктор
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

// создаем прототипы со свойствами и методами
Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(this.name + " Says woof!");
  } else {
    console.log(this.name + " Says Yip");
  }
};

Dog.prototype.run = function () {
  console.log('Run!');
};

Dog.prototype.wag = function () {
  console.log("Wag");
};

// создаем объект
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Puddle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);


// вносим реализацию для spota переопределяя прототип
spot.bark = function () {
  console.log(this.name + " Says Woof!");
};

var barnaby = new Dog("Barnaby", "Basset Hound", 55);



Dog.prototype.sitting = false;

// добавляем в  прототип новый метод sit

Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }

};



fido.bark();
fido.run();
fido.wag();



fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

barnaby.sit();
barnaby.sit();

spot.sit();
spot.sit();

// проверяем откуда взято используемое значение свойства из экземпляра или прототипа

spot.hasOwnProperty("species");
if (spot.hasOwnProperty("species")) {
  console.log('true')
} else {
  console.log('false')
}