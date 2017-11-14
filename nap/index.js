var winner = function () {
  console.log('Winner');
}
var loser = function() {
  console.log('Loser');
}

winner();

var a = winner;
var b = loser;
var c = loser;

a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();