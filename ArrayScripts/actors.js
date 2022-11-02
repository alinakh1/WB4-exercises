

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   
   for (i = 0; i < academyMembers.length; i++){
    if (academyMembers[i].memID == 187) {
      console.log("The Academy Member is " + academyMembers[i].name)
     }
   }


   for (i = 0; i < academyMembers.length; i++){
    if (academyMembers[i].films.length >= 3) {
        console.log(academyMembers[i].name + " has been in three films")
    }
}

for (i = 0; i < academyMembers.length; i++) {
    if ( academyMembers[i].name == "Bob") {
    console.log( academyMembers[i].name + "has name Bob")
    }
}



// academyMembers[i].name