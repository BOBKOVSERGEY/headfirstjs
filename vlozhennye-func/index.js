var migrating = true;
var fly = function (num) {
  var sound = 'Flying';
  function wingFlapper() {
    console.log(sound);
  }
  for (var i = 0; i < num; i++) {
    wingFlapper();
  }
}

function quack(num) {
  var sound = "Quack";
  var quaker = function () {
    console.log(sound);
  }
  for (var i = 0; i < num; i++) {
    quaker();
  }
}

if (migrating) {
  quack(4);
  fly(4);
}