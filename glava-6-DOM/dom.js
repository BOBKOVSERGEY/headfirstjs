
/*
function init() {
  var elGreenPlanet = document.getElementById('greenplanet');
  elGreenPlanet.innerHTML = 'Что то новое';
}
window.onload = init();
*/
var elGreenPlanet = document.getElementById('greenplanet');


elGreenPlanet.setAttribute('class', 'redtext');
var atclGreenPlanet = elGreenPlanet.getAttribute('class');
console.log(atclGreenPlanet);
elGreenPlanet.innerHTML = 'Что то новое';


console.log(elGreenPlanet.textContent);

//document.getElementsByClassName(); поиск по классу
//document.getElementsByTagName(); поиск по тегу