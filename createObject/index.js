function Album(title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.play = function () {
    console.log(this.title, this.artist, this.year);
  }
}

var darkside = new Album("Dark Side of the Cheese", "Pink Mouse", 1971);
darkside.play();
// создаем объект
/*var dog = {
 name: "Fido",
 breed: "Mixed",
 weight: 38
 }

 console.log(dog.name);

// создаем конструктор
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

// использование конструктора создание объекта с помощью конструктора
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

// создаем собак
var dogs = [fido, fluffy, spot];

// проходимся в цикле по массиву собак
for (var i = 0; i < dogs.length; i++) {
  // обращение к методу
  dogs[i].bark();

  var size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  }
  console.log("Dog " + dogs[i].name
    + " is a "
    + size + " "
    + dogs[i].breed);
}
 */
/*============================
// создаем конструктор
function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;

  // метод
  this.getSize = function () {
    if (this.ounces === 8) {
      return 'small';
    } else if (this.ounces === 12) {
      return 'medium';
    }else if (this.ounces === 16) {
      return 'large';
    }
  }

  // 2 метод
  this.toString = function () {
    return 'Вы заказали ' + this.getSize() + ' ' + this.roast + ' coffee';
  }
}

// создаем объект
var houseBlend = new Coffee("House Blend", 12);

console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());*/

