/*We have a function that takes one argument. Determine whether the passed argument is
an Armstrong number or not. If the number is an Armstrong number, it should return true;
otherwise, it should return false.*/

function isArmstrongNumber(num) {
    const digits = num.toString().split('');
    const numDigits = digits.length;

    const sum = digits.reduce((accumulator, digit) => {
        return accumulator + Math.pow(parseInt(digit), numDigits);
    }, 0);
    return sum === num;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(178));

console.log();
//Calculate the check digit of the credit card number using the Luhn algorithm.

function checkLuhnDigit(cardNumber) {
    const digits = cardNumber.replace(/\D/g, '').split('').map(Number);
    
    for (let i = digits.length - 2; i >= 0; i -= 2) {
        let doubled = digits[i] * 2;
        if (doubled > 9) {
            doubled -= 9;
        }
        digits[i] = doubled;
    }

    const sum = digits.reduce((acc, num) => acc + num, 0);
    console.log("Sum of processed digits:", sum);
    const checkDigit = (10 - (sum % 10)) % 10; 

    return checkDigit;
}

const cardNumber = '4561-2612-1234';
const checkDigit = checkLuhnDigit(cardNumber);
console.log("The check digit is:", checkDigit);



