/*Write a function caesarCipher() that shifts letters by a specified number (shift)
while leaving non-letter characters (like punctuation and spaces) unchanged.*/

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

console.log(caesarCipher('Tumo Labs', 3));


console.log()
/*Write a function findLargestNumber() that takes an array of numbers as input and
returns the largest number in the array. If the array is empty, the function should return null.*/

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargestNumber([10, 45, 2, 98, 29]));
console.log(findLargestNumber([]));
