function sum (a, b) {
  var sumOfTwo = (a + b);

  console.log('"The sum of ' + a + ' and ' + b + ' is ' + sumOfTwo + '"');

  var sum2_result = document.getElementById('sum2-result');
  sum2_result.textContent = ('"The sum of ' + a + ' and ' + b + ' is ' + sumOfTwo + '"');

  return sumOfTwo;
}

function multiply (a, b) {
  var productOfTwo = a * b;

  console.log('"The product of ' + a + ' and ' + b + ' is ' + (a * b) + '"');

  var multiply2_result = document.getElementById('multiply2-result');
  multiply2_result.textContent = ('"The product of ' + a + ' and ' + b + ' is ' + productOfTwo + '"');

  return productOfTwo;
}
//Great use of code to limit the amount of lines!
function sumAndMultiply(a, b, c){
  var sum_product = [sum(sum(a, b), c), multiply(multiply(a, b), c)];

  console.log('"' + a + ' and ' + b + ' and ' + c + ' sum to ' + sum_product[0] + '"');
  console.log('"The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + sum_product[1] + '"');

  var sum3_result = document.getElementById('sum3-result');
  sum3_result.textContent = ('"' + a + ' and ' + b + ' and ' + c + ' sum to ' + sum_product[0] + '"');

  var multiply3_result = document.getElementById('multiply3-result');
  multiply3_result.textContent = ('"The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + sum_product[1] + '"');

  return sum_product;
}

function sumArray(a) {
  var sum_array = 0;

  for (var i = 0; i < a.length; i++){
    sum_array += a[i];
  }

  console.table(a);
  console.log('"' + a.toString() + ' was passed in as an array of numbers, and ' + sum_array + ' is their sum"');

  var sumArray_result = document.getElementById('sumArray-result');
  sumArray_result.textContent = ('"' + a.toString() + ' was passed in as an array of numbers, and ' + sum_array + ' is their sum"');

  return sum_array;
}

function multiplyArray(a) {
  var multiply_array = 1;

  for (var i = 0; i < a.length; i++){
    multiply_array *= a[i];
  }
//You make it look easy, thanks for the help with theory!
  console.table(a);
  console.log('"The numbers ' + a.toString() + ' have a product of ' + multiply_array + '"');

  var multiplyArray_result = document.getElementById('multiplyArray-result');
  multiplyArray_result.textContent = ('"The numbers ' + a.toString() + ' have a product of ' + multiply_array + '"');

  return multiply_array;
}
