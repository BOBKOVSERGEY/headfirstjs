var now = new Date();

var theYear = now.getFullYear();

var elDate = document.getElementById('date');
elDate.innerHTML = theYear;

// конструктору можно передать простую строку с датой
var birthday = new Date("January 3, 1987");

console.log(birthday);