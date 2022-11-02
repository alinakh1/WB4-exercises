

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

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

myScores.sort((a,b) => a-b) 
    let median;
    let myScoreLength = myScores.length;
    if (myScoreLength%2 !=0) {
        let middleIndex = Math.floor(myScoreLength/2);
        median = myScores[middleIndex];
    } else {
        let middleIndex = Math.floor(myScoreLength/2);
        median = myScores[middleIndex] + myScores[middleIndex + 1];
    }


    yourScores.sort((a,b) => a-b) 
    let mediann;
    let yourScoreLength = yourScores.length;
    if (yourScoreLength%2 !=0) {
        let middleIndex = Math.floor(yourScoreLength/2);
        mediann = yourScores[middleIndex];
    } else {
        let middleIndex = Math.floor(yourScoreLength/2);
        mediann = yourScores[middleIndex] + yourScores[middleIndex + 1];
    }


console.log(getAverage(myScores));
console.log(getAverage(yourScores));

console.log(median);
console.log(mediann);