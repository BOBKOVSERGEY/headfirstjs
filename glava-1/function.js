function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " " + weight + " says WOOF WOOF");
    } else {
        console.log(name + " " + weight + " says woof woof");
    }
}

function doIt(param) {
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);

var age = 7;

function addOne(x) {
    x = x + 1;
    console.log(x);
}
addOne(age);



function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3, "Earl Gray");

function barkAtTheMoon() {
    console.log("Woooooooooo!")
}
barkAtTheMoon();

function bake(degrees) {

    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator";
    } else {
        message = "That's a very comfortable temperature for me";
        //setMode("bake");
        //setTemp(degrees);
    }
    return message;

}

var status = bake(350);
console.log(status);