var products = ['Шоколадное', 'С минтолом', 'Мароженное масло', 'Bubblegum'];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        document.write(products[i] + " contains bubble gum" + '<br>');
    }

    i++;
}