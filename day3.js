//theFirstTask
function firstNonRepeatingCharacter(str) {
    const charCount = {};

       for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

       for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null; 
}

//testing
console.log(firstNonRepeatingCharacter("xxxxxiixxyxx")); 
console.log(firstNonRepeatingCharacter("aaron")); 
console.log(firstNonRepeatingCharacter("aabbcc"));


//theSecondTask
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//testing
fizzBuzz(15);
