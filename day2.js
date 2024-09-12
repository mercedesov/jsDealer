//theFirstTask
function divisibleBy3And5() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

//testing
divisibleBy3And5(); 


//theSecondTask
function printSequence() {
    let result = [];
    
    for (let i = 0; i <= 789; i++) {
        const strNum = String(i).padStart(3, '0'); // Convert to string and pad with zeros
        if (!strNum.includes('1') && !strNum.includes('2')) {
            result.push(strNum);
        }
    }
    console.log(result.join(','));
}

//testing
printSequence();
