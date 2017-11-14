// инициализируем функцию после загрузки страницы
window.onload = init;


function init() {
  var map = document.getElementById('map');
  map.onmousemove = showCoords;
}

function showCoords(eventObj) {
  var map = document.getElementById('coords');
  var result = document.getElementById('result');

  // координаты по горизонтали
  var x = eventObj.clientX;

  // координаты по вертикале
  var y = eventObj.clientY;
  map.innerHTML = "Map coordinates: " + x + ', ' + y;

  if(x === 200 || y === 190) {
    result.innerHTML = "Ура.........";
  }
}