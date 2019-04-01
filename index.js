var a = parseInt(prompt('input a'));
var b = parseInt(prompt('input b'));
var c = parseInt(prompt('input b'));
var d = parseInt(prompt('input b'));

function summa() {
    
    return a + b;
}
console.log(summa().toFixed(2));

var arr = [a, b, c, d];

var result = arr.reduce(function(sum, current) {
  var preresult = sum + current;
  return preresult;
});
console.log(result);

module.exports ={
  summa,
  reduce
}

var date = new Date();

var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
}

console.log(date.toLocaleString('ru', options));