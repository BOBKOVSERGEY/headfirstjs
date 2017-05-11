// добавление переменнной для хранения объекта
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "Красный",
    passengers: 2,
    convertible: false,
    mileage: 2021
};
function buyIt() {
    document.write('хрю, покупаю');
}
function noBuyIt() {
    document.write('хрю, не покупаю');
}

var miles = chevy.mileage;

if (miles > 2000) {
    buyIt();
} else {
    noBuyIt();
}

document.write('<br>Цвет машины: ' + chevy.color + '<br>');