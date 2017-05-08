var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31,
    .25, .29, .27, .22, .31, .25, .25, .33,
    .21, .25, .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25, .25, .25,
    .27, .25, .26, .29];

function printAndGetHighScore(scores) {

    var output; // переменная используется в цикле для построения выводимой строки

    var highScore = 0;

    // переменная для хранения тзекущего индекса
    for (var i = 0; i < scores.length; i++) {

        output = "Пузырьковый раствор #" + i + " score: " + scores[i] + '<br>';
        document.write(output);

        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
var highScore = printAndGetHighScore(scores);

document.write('Самый большой :' + highScore + '<br>');

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
var bestSolutions = getBestResults(scores, highScore);
document.write('Самый большие :' + bestSolutions + '<br>');

function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost = 100; // much higher than any of the costs
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
var getMostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

document.write('Самый лучший  :' + getMostCostEffective);