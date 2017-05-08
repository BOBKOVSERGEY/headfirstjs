var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var output; // переменная используется в цикле для построения выводимой строки

var highScore = 0;

 // переменная для хранения тзекущего индекса
for (var i = 0; i < scores.length; i++) {
    output = "Пузырьковый раствор #" + i + " score: " + scores[i] + '<br>';
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
    document.write(output);
}
document.write('Самый большой :' + highScore + '<br>');

var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}

document.write('Самый большие :' + bestSolutions);
