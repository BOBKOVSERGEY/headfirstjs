// создаем объект
var fiat = {
    //свойства
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    // свойство для хранения текущего состояния двигателя
    started: false,
    fuel: 0,

    // методы
    // метод для запуска двигателя
    start: function () {
        if (this.fuel == 0) {
            document.write('Заправьте автомобиль, бак пустой<br>')
        } else {
            this.started = true;
        }
    },
    // метод для остановки двигателя
    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                document.write(this.make + " " + this.model + " Поехал Zoom, zoom Fiat<br>");
            } else {
                document.write("Нет бензина Fiat<br>");
                this.stop();
            }

        } else {
            document.write('Вам необходимо завести машину, START<br>');
        }
    },

    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
}

// // создаем объект
var cadi = {
    //свойства
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    // свойство для хранения текущего состояния двигателя
    started: false,

    // методы
    // метод для запуска двигателя
    start: function () {
        this.started = true;
    },
    // метод для остановки двигателя
    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            document.write("Zoom, zoom Cadillac<br>");
        } else {
            document.write('Вам необходимо завести машину Кадилак, START<br>');
        }
    }
}

var chevy = {
    //свойства
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    // свойство для хранения текущего состояния двигателя
    started: false,

    // методы
    // метод для запуска двигателя
    start: function () {
        this.started = true;
    },
    // метод для остановки двигателя
    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            document.write("Zoom, zoom Chevy<br>");
        } else {
            document.write('Вам необходимо завести машину Shevy, START<br>');
        }
    }
}

/* перебираем все свойства объекта в цикле
for (var prop in chevy) {
    document.write(prop + ": " + chevy[prop] + '<br>');
}
 */


fiat.start();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

cadi.start();
cadi.drive();
cadi.stop();

chevy.start();
chevy.drive();
chevy.stop();


