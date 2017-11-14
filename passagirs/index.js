var passengers = [
  {name: "Sergey Bobkov", paid: true, ticket: 'coach'},
  {name: "Taran Kira", paid: true, ticket: 'firstclass'},
  {name: "Tyn Artem", paid: false, ticket: 'firstclass'},
  {name: "Tyn Irina", paid: true, ticket: 'coach'}
];

//console.log(passengers[1].name + passengers[1].paid + passengers[1].ticket)
//console.log(passengers[1]);

function createDrinkOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === 'firstclass') {
    orderFunction = function () {
      console.log("Would you like a cocktail or wine?");
    }
  } else {
    orderFunction = function () {
      console.log("Your choice is cola or water");
    }
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
}

function servePassegers(passagers) {
  for(var i = 0; i < passengers.length; i++) {
    serveCustomer(passagers[i]);
  }
}

servePassegers(passengers);

/*
for(var i = 0; i < passengers.length; i++) {
  console.log(passengers[i].name + ' ' + passengers[i].paid + ' ' + passengers[i].ticket);
}


function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passager) {
  return (passager.name === 'Dr. Evel');
}

function checkNotPaid(passager) {
  return (!passager.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
  if (!allCanFly) {
    console.log("The plane cant't take off");
  }


var allPaid = processPassengers(passengers, checkNotPaid);
  if (!allPaid) {
    console.log('2');
  }

console.log(passengers[2].paid);

function checkPaid(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    if (!passengers[i].paid) {
      return false;
    }
  }
  return true;
}

function checkNoFly(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    if (onNoFlyList(passengers[i].name)) {
      return false;
    }
  }
  return true;
}

function printPassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    console.log(passengers[i].name);
    return false;
  }
  return true;
}
printPassengers(passengers);
  */