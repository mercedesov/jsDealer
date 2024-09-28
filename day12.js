/* You are given an array of integers. Your goal is to find the first element in the array that
repeats and returns its index. If there are no repeating elements, return -1. */

function firstRepeatingIndex(arr) {
    const seen = {}; 
    const count = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] !== undefined) {
            count[arr[i]]++;
        } else {
            seen[arr[i]] = i;
            count[arr[i]] = 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] > 1) {
            return `${arr[i]} appears in index ${seen[arr[i]]} two times`;
        }
    }
    return -1;
}

const arr = [1, 5, 3, 4, 3, 5, 6];
console.log(firstRepeatingIndex(arr));



console.log()
/*You are given an array of integers from 1 to n with one number missing. Your task is to find the
missing number in the sequence.*/


function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];  // Add each element to actualSum
    }

    return expectedSum - actualSum;
}

const array = [1, 2, 4, 5, 6];
const n = 6;
console.log("The missing number is", findMissingNumber(array, n)); 

