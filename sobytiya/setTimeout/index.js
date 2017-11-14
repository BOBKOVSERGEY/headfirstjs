// назначаем обработчик
function timerHandler() {
  alert('Привет, Мир!');
}

// Сообщение появляется один раз в течении 5 секунд после загрузки
setTimeout(timerHandler, 5000);
// Сообщение появляется каждые 5 секунд
//setInterval(timerHandler, 5000);