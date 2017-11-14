var products = [
  {name: 'Grapefruit', calories: 170, color: 'red', sold: 8200},
  {name: 'Orange', calories: 160, color: 'orange', sold: 12101},
  {name: 'Cola', calories: 210, color: 'caramel', sold: 25412},
  {name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922},
  {name: 'Lemon', calories: 200, color: 'clear', sold: 14983},
  {name: 'Raspberry', calories: 180, color: 'pink', sold: 9427},
  {name: 'Root Beer', calories: 200, color: 'caramel', sold: 9909},
  {name: 'Water', calories: 0, color: 'clear', sold: 62213}
];

//console.log(products[0].name);
// сортировка по продажам
function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
    return 1;
  } else if (colaA.sold === colaB.sold) {
    return 0;
  } else {
    return -1;
  }
}
// сортировка по имени
function compareName(colaA, colaB) {
  if (colaA.name > colaB.name) {
    return 1;
  } else if (colaA.name === colaB.name) {
    return 0;
  } else {
    return -1;
  }
}

// сортировка по калориям
function compareCalories(colaA, colaB) {
  if (colaA.calories > colaB.calories) {
    return 1;
  } else if (colaA.calories === colaB.calories) {
    return 0;
  } else {
    return -1;
  }
}

// сортировка по цвету
function compareColor(colaA, colaB) {
  if (colaA.color > colaB.color) {
    return 1;
  } else if (colaA.color === colaB.color) {
    return 0;
  } else {
    return -1;
  }
}

products.sort(compareSold);
// крассивая распечатка массива products
//console.log(products);
function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log("Name: " + products[i].name +
        ", Calories: " + products[i].calories +
        ", Color: " + products[i].color +
        ", Sold: " + products[i].sold)
  }
}

// Сортировка по продажам
//products.sort(compareSold);

// сортировка по имени
//products.sort(compareName);

// сортировка по калориям
//products.sort(compareCalories);

// сортировка по цвету
products.sort(compareColor);


printProducts(products);