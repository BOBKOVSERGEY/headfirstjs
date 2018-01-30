function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

// создаем конструктор
function SpaceRobot(name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}

// создаем прототипы
Robot.prototype.maker = "ObjectRus";

Robot.prototype.speak = function () {
  console.log("Warning warning!!");
};

Robot.prototype.makeCoffee = function () {
  console.log(this.name + " Make coffee");
};

Robot.prototype.blinkLights = function () {
  console.log("Blink, blink!");
};

SpaceRobot.prototype = new Robot();


// добавляем 2 метода в прототип
SpaceRobot.prototype.speak = function () {
  console.log(this.name + " says Sir, if i may venture an opinion");
};
SpaceRobot.prototype.pilot = function () {
  console.log(this.name + " says Thrusters? Are they important?");
};

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
