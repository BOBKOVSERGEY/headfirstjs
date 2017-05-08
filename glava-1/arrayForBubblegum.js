var products = ['Шоколадное', 'С минтолом', 'Мароженное масло', 'Bubblegum'];
var hasBubbleGum = [false, false, false, true];

for (var i = 0; i < hasBubbleGum.length; i++) {
    if (hasBubbleGum[i]) {
        document.write(products[i] + " contains bubble gum" + '<br>');
    }
}