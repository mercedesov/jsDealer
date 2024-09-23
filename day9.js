//Write a function that will calculate the arithmetic mean of the years of an array.
function calculateMean(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const mean = sum / arr.length;
  
  return mean;
}

//testing
const result = calculateMean([5, 8, 12, 4]);
console.log(result); 

/* given a function that takes a number as an argument. it is required
to find the product of the digits of the number received in the
argument. */

function productOfDigits(num) {
  let product = 1; 
  let digits = String(num).split(''); 
  for (let i = 0; i < digits.length; i++) {
    product *= Number(digits[i]);   }

  return product;
}

//testing
console.log(productOfDigits(321));
