/* Write a function that returns the first prime number greater than the number it is given as input.
For example: 7 > 11 */

function nextPrime(n) {
  let num = n + 1;
  
  while (!isPrime(num)) {
    num++;
  }
  
  return num;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

//testing
console.log(nextPrime(7));

console.log();
/* Create a funcƟon that takes a URL and checks if it's valid or not based on the following criteria:
The URL must start with hƩp:// or hƩps://.
The URL must end with .php or .html, or / (slash) */


function isValidURL(url) {
  const regex = /^(http:\/\/|https:\/\/).+\.(php|html)\/?$/;

  return regex.test(url);
}

//testing
console.log(isValidURL("http://site.ru/index.php")); 
console.log(isValidURL("http://site.com."));          
console.log(isValidURL("site.ru/index.php"));          
