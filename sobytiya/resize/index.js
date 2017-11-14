window.onresize = resize;

function resize() {
  var elDisplay = document.getElementById('display');
  elDisplay.innerHTML = elDisplay.innerHTML + ' строка';
}

