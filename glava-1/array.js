var flavors = ["vanilla", "butterscotch", "lavender", "chokolate", "cookie dough"];
flavors[3] = "vanila chokolate chip";
var flavorOfTheDay = flavors[3];
var numFlovor = flavors.length;
var numEndFlovor = flavors.length - 1;
document.write(numEndFlovor);
document.write('<br>Последний элемент массива:' + flavors[numEndFlovor]);
document.write(flavorOfTheDay);
document.write('<br>Сколько элементов в массиве: ' + numFlovor);


function makePhrases() {
    var words1 = ["Человек", "Слон", "Лев", "Носорог", "Петух"];
    var words2 = ["Богатый", "большой", "Волосаты", "Злой", "ушасты"];
    var words3 = ["бритый", "облезлый", "тупой", "умный", "застенчивы"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    var heading = document.getElementById('phrase');
    heading.textContent = phrase;
}
makePhrases();