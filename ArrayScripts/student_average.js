


let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

   let studentsCount = students.length;

   for(let i = 0; i < studentsCount; i++){
        console.log("The students Name is " + students[i].name);
        console.log("The students scores are:");
        console.log(students[i].scores);

        let averageScore = getAverage(students[i].scores);

        console.log("The average score is: " + averageScore);
        console.log();
   }

   
//     let studentName = name.length;
//     let studentscores = scores.length;
    
//     for (let i = 0; i < studentName; i++){
//         let sum = 0;

//     for (let s = 0; s < studentscores; s++){
//         sum += students[i].scores[s];
//     }

//     average = sum / studentscores;
// }

// console.log("the average is " + average);


function getAverage(values){

    // values is an array of integers, compute the average and return that number
    let valueLength = values.length;
    let sum = 0;
    for(let i = 0; i < valueLength; i++)
    {
        sum += values[i]
    }

    let average = sum / valueLength

    return average;
}

console.log("the average is " + result);  