// объект
var taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341,
    //добавляем метод
    drive: function () {
        console.log("ZoomS");
    }
};

taxi.drive();

// функция
function pregual(car) {

    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }

    return true;
}

var worthALook = pregual(taxi);

if (worthALook) {
    document.write("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    document.write("You should really pass on the " + taxi.make + " " + taxi.model);
}
