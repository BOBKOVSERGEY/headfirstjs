/*var count = 0;
window.onload = function() {
  var button = document.getElementById("clickme");
  button.onclick = handleClick;
};

function handleClick() {
  var message = "You clicked me ";
  var div = document.getElementById("message");
  count++;
  div.innerHTML = message + count + " times!";
}*/

/**
 * Замыкание
 */

window.onload = function () {
  var count = 0;
  var message = "You clicked me ";
  var elMessage = document.getElementById('message');
  var elButton = document.getElementById('clickme');
  elButton.onclick = function () {
    count++;
    elMessage.innerHTML = message + count + ' times!';
  }
}