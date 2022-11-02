let num = 1;
let i = 1;
while (i < 5) {
 num = num * 2;
 console.log(num);
 i++;
}



for (i = 0; i < academyMembers.length; i++) {
    let membersFilm = academyMembers[i].films;
    let filmLength = films.length;
    
    for (let f = 0; f < filmLength; f++) {
        if (filmLength.charAt(0) == "A" ) {
        console.log( academyMembers[i].name + "has been in a film that starts with A")
        }
    }
        
    }///from actorsjs


    for (i = 0; i < academyMembers.length; i++) {
        let films = academyMembers[i].films;
        let filmLength = films.length.toString();
        
        for (f = 0; f < filmLength; f++) {
            if (filmLength.charAt(0) == "A" ) {
            console.log( academyMembers[i].name + "has been in a film that starts with A")
            }
        }
        }