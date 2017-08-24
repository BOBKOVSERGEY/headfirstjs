//объект
var view = {
  //метод 
  displayMessage : function (msg) {
    //делаем выборку элемента
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}


/*view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap, tap");
 */

var model = {
  boardSize: 7, // размер игрового поля
  numShips: 3, // кол-во кораблей в игре
  shipLength: 3, // длина корабля в клетке
  shipsSunk: 0, // инициализирует значение 0 в начале игры

  ships: [
    { locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] }
  ],

  // метод получения координаты выстрела
  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Попал!");
        if (this.isSunk(ship)) {
          view.displayMessage("Вы потопили мой корабль");
          this.shipsSunk++;
        }
        return true;
      }

    }
    view.displayMiss(guess);
    view.displayMessage("Вы промахнулись");
    return false;
  },
  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }
}
/*
model.fire("53");

model.fire("06");
model.fire("16");
model.fire("26");

model.fire("34");
model.fire("24");
model.fire("44");

model.fire("44");
*/

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if (guess === null || guess.length !== 2) {
    view.displayMessage("Пожалуйста, введите буквы и цифры");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      view.displayMessage("К сожалению, это не на доске.");
    } else if (row < 0 || row >= model.boardSize ||
      column < 0 || column >= model.boardSize) {
      view.displayMessage("К сожалению, это вне  доски.");
    } else {
      return row + column;
    }
  }
}
var controller = {
  guesses: 0,

  processGuess: function(guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("Ты потопил все мои коробли, в " + this.guesses + " попаданий");
      }
    }
  }
}

controller.processGuess("A0"); // miss

controller.processGuess("A6"); // hit
controller.processGuess("B6"); // hit
controller.processGuess("C6"); // hit

controller.processGuess("C4"); // hit
controller.processGuess("D4"); // hit
controller.processGuess("E4"); // hit

controller.processGuess("B0"); // hit
controller.processGuess("B1"); // hit
controller.processGuess("B2"); // hit
