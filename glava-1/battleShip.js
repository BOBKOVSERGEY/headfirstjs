// переменные для хранения позиции корабля
var randomLoc = Math.floor(Math.random() *5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 2;


var guess; // номер текущей попытки
var hits = 0; // кол-во попаданий
var guesses = 0; // кол-во попыток

var isSunk = false; // потоплен корабль или нет

// пока корабль не потоплен
while (isSunk == false) {
    // получить координаты выстрела от пользователя
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");

    // прибавить один к guesses
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses++;
        // если выстрел попал увеличиваем кол-во попаданий
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Попал!');
            hits++;
            // если кол-во попаданий равно трем
            if (hits == 3) {
                // присвоит isSunk значение true
                isSunk = true;
                // вывести сообщение, что корабль потоплен
                alert("You sank my battleship");
            }
        } else {
            alert('Мимо!');
        }
    }
}
// выводим результаты для пользователя
var stats = "You took " + guesses + "guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
document.write(stats);