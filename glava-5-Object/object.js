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

// изменяем значение свойства
chevy.mileage = 1000;

var miles = chevy.mileage;

if (miles > 2000) {
    buyIt();
} else {
    noBuyIt();
}

// удаление свойства объекта
delete chevy.color;

console.log(chevy);
document.write('<br>Цвет машины: ' + chevy.color + '<br>' +
               '<br>Пробег: ' + chevy.mileage + '<br>');