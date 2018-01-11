function dogCatcher(obj) {
  if (obj instanceof Dog) {
    return true;
  } else {
    return false;
  }
}
var paramsMeow = {
  name: 'Meow',
  breed: 'Siamese',
  weight: 10
};
var paramsWhiskers = {
  name: 'Whiskers',
  breed: 'Mixed',
  weight: 12
};

function Cat(params) {
  this.name = params.name;
  this.breed = params.breed;
  this.weight = params.weight;
}

var meow = new Cat(paramsMeow);
var whiskers = new Cat(paramsWhiskers);

var paramsFluffy = {
  name: 'Fluffy',
  breed: 'poodle',
  weight: 30
};
var paramsSpot = {
  name: 'Spot',
  breed: 'Chihuahua',
  weight: 10
};

function Dog(params) {
  this.name = params.name;
  this.breed = params.breed;
  this.weight = params.weight;

  this.bark = function () {
    if (this.weight > 25) {
      console.log(this.name + ' ' + 'I am gib dog');
    } else {
      console.log(this.name + ' ' + 'I am small dog');
    }
  }
}

var fluffy = new Dog(paramsFluffy);
var spot = new Dog(paramsSpot);


// Создаем массив кошек и собак

var dogs = [meow, whiskers, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(dogs[i].name + " is a dog");
  }
}
