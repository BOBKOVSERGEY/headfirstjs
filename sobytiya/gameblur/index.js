// запускаем функцию только после полной загрузки страницы
window.onload = init;


// обычная функция
function init() {
  // обращаемся ко всем изображениям
  var elImages = document.getElementsByTagName('img');

  // пишем цикл который пройдется по все элементам
  for (var i = 0; i < elImages.length; i++) {
    // перебираем все изображения и каждому назначаем обработчик щелчка
    elImages[i].onclick = showAnswer;
  }
}


// функция восстановления неразмытого изображения
function showAnswer(eventObj) {
  // свойство target сообщает какой элемент сгенерировал данное событие
  var elImages = eventObj.target;

  // получаем id элемента
  var elName = elImages.id;
  elName = elName + '.jpg';
  elImages.src = elName;
  // заново блюрим
  /*setTimeout(function () {
    var nextElName = elImages.id;
    nextElName = nextElName + 'blur' + '.jpg';

    elImages.src = nextElName;

  }, 3000)*/
  setTimeout(reblur, 2000, elImages);
}

function reblur(image) {
  var name = image.id;
  name = name + "blur.jpg";
  image.src = name;
}

/*// запускаем функцию только после полной загрузки страницы
 window.onload = init;


 // обычная функция
 function init() {
 // обращаемся ко всем изображениям
 var elImages = document.getElementsByTagName('img');

 // пишем цикл который пройдется по все элементам
 for (var i = 0; i < elImages.length; i++) {
 // перебираем все изображения и каждому назначаем обработчик щелчка
 elImages[i].onmouseover = showAnswer;
 elImages[i].onmouseout = reblur;
 }
 }


 // функция восстановления неразмытого изображения
 function showAnswer(eventObj) {
 // свойство target сообщает какой элемент сгенерировал данное событие
 var elImages = eventObj.target;

 // получаем id элемента
 var elName = elImages.id;
 elName = elName + '.jpg';
 elImages.src = elName;

}

function reblur(eventObj) {
  var image = eventObj.target;
  var name = image.id;
  name = name + 'blur.jpg';
  image.src = name;
}*/