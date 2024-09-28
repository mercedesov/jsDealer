// Write a function that sets the random (English) letters by alphabetical order.

function lettersSorted(n) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomArray = [];

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomArray.push(letters[randomIndex]);
    }

     randomArray.sort();

    return randomArray;
}

console.log(lettersSorted(17)); 


console.log()
/*Write a function that calculates the Tribonacci sequence up to a given number n. The Tribonacci
sequence is a generalization of the Fibonacci sequence where each term is the sum of the three
preceding ones, starting with 0, 1, and 1.*/


function tribonacci(n) {
    const sequence = [0, 1, 1];

    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    if (n === 2) return sequence;

    for (let i = 3; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
    }

    return sequence;
}

console.log(tribonacci(17));

