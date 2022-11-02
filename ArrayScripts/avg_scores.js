let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
// let yourScoreLength = yourScores.length;


// console.log(myScoreLength);

function getAverage(myScores){
    let myScoreLength = myScores.length;
    let sum = 0;
    let avg;

    for (let i = 0; i < myScoreLength; i++){
        sum += myScores[i];
        avg = sum / myScoreLength;
    }
    return avg;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));












