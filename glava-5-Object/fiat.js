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
            document.write("Zoom, zoom");
        } else {
            document.write('You need to start the engine first');
        }
    }
}

fiat.drive();
