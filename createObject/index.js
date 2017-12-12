// создаем объект
/*var dog = {
  name: "Fido",
  breed: "Mixed",
  weight: 38
}

console.log(dog.name);*/

// создаем конструктор
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

// использование конструктора создание объекта с помощью конструктора
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

// создаем собак
var dogs = [fido, fluffy, spot];

// проходимся в цикле по массиву собак
for (var i = 0; i < dogs.length; i++) {
  var size = "small";
  if(dogs[i].weight > 10) {
    size = "large";
  }
  console.log("Dog " + dogs[i].name
    + " is a "
    + size + " "
    + dogs[i].breed);
}


