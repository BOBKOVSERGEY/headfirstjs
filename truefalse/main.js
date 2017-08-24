var input = 'sergey_bobkov@inbox.ru';
for ( var i = 0; i < input.length; i++) {
  if (input.charAt(i) === '@') {
    console.log('@ index ' + i)
  }
}

var phrase = 'the cat in the hat';

var index = phrase.indexOf('cat');
console.log(index);

var data = 'name|phone|address';

var val = data.substring(5,10);

console.log(val);

var vals = data.split('|');

console.log(vals);

for (var i = 0; i < vals.length; i++) {
  document.write(vals[i] + '<br>');
}

var text = 'Купить пирог';

var texti = text.replace('Купить', 'Buy')
console.log(texti);
