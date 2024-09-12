//theFirstTask
function countV(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    } 
    return count;
    
}
//testing
const example = 'The quick brown fox';
console.log(countV(example)); 


//theSecondTask
function reverseWords(sentence) {
    const words = sentence.split(' ');
    let reversedSentence = '';

    for (let i = 0; i < words.length; i++) {
        let reversedWord = '';

        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }

        reversedSentence += reversedWord;

        if (i < words.length - 1) {
            reversedSentence += ' ';
        }
    }
    return reversedSentence;
}

//testing
const examp = 'Welcome to this Javascript Guide!';
console.log(reverseWords(examp)); 
