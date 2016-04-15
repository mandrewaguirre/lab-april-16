function sum (a, b) {
  //console.log('"The sum of ' + a + ' and ' + b + ' is ' + (a + b) + '"');
  return(a + b);
}

function multiply (a, b) {
  //console.log('"The product of ' + a + ' and ' + b + ' is ' + (a * b) + '"');
  return(a * b);
}

function sumAndMultiply(a, b, c){
  var sum_product = [sum(sum(a, b), c), multiply(multiply(a, b), c)];
  console.log('"' + a + ' and ' + b + ' and ' + c + ' sum to ' + sum_product[0] + '"');
  console.log('"The nimbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + sum_product[1] + '"');
  return sum_product;
}

function sumArray(a) {
  var sum_array = 0;
  for (var i = 0; i < a.length; i++){
    sum_array = sum_array + a[i];
  }
  console.table(b);
  console.log(a.toString() + ' was passed in as an array of numbers, and ' + sum_array + ' is their sum');
  return sum_array;
}
