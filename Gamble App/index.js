const englishTeams = [
    "Arsenal", "Aston Villa", "Brentford", "Brighton & Hove Albion",
    "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United",
    "Leicester City", "Liverpool", "Manchester City", "Manchester United",
    "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur",
    "Watford", "West Ham United", "Wolverhampton Wanderers"
  ];

  const laliga = [
    "Alaves",
    "Athletic Bilbao",
    "Atletico Madrid",
    "Barcelona",
    "Cadiz",
    "Celta Vigo",
    "Elche",
    "Espanyol",
    "Getafe",
    "Granada",
    "Levante",
    "Mallorca",
    "Osasuna",
    "Rayo Vallecano",
    "Real Betis",
    "Real Madrid",
    "Real Sociedad",
    "Sevilla",
    "Valencia",
    "Villarreal"
  ];

  const serieA = [
    "AC Milan",
    "AS Roma",
    "Atalanta",
    "Bologna",
    "Cagliari",
    "Empoli",
    "Fiorentina",
    "Genoa",
    "Hellas Verona",
    "Inter Milan",
    "Juventus",
    "Lazio",
    "Napoli",
    "Sampdoria",
    "Sassuolo",
    "Spezia",
    "Torino",
    "Udinese",
    "Venezia",
    "Vicenza"
  ];
  const mls = [
  "Atlanta United",
  "Chicago Fire",
  "Colorado Rapids",
  "Columbus Crew",
  "D.C. United",
  "FC Cincinnati",
  "FC Dallas",
  "Houston Dynamo",
  "Inter Miami",
  "LA Galaxy",
  "Los Angeles FC",
  "Minnesota United",
  "Montreal Impact",
  "Nashville SC",
  "New England Revolution",
  "New York City FC",
  "New York Red Bulls",
  "Orlando City",
  "Philadelphia Union",
  "Portland Timbers"
];









const fixtures = document.querySelector(".container.ball");
const leagues = document.querySelectorAll(".leagues");
let playMatch = document.getElementById("play");
const time = document.querySelectorAll(".finished");
let hasPlayed = false;
let currentTeam;
const resetting = document.querySelector(".resetting");


resetting.addEventListener("click", ()=>{
    if (currentTeam === "englishTeams"){
        renderTeams(englishTeams)
    }
    else if(currentTeam === "laLiga"){
        renderTeams(laliga)
    }
    else if (currentTeam === "serieA"){
        renderTeams(serieA)
    }
    else if (currentTeam === "mls"){
        renderTeams(mls)
    }
    reset(scores);
})






    
function reset(num){
    num.forEach((score)=>{
        score.textContent = 0;
    })
}



leagues.forEach((league)=>{
    league.addEventListener("click", (e)=>{
        hasPlayed = false;
        timingChecker(time)
        leagues.forEach((league)=>{
            league.classList.remove("current");
            reset(scores);

        })
        let target = e.currentTarget.id;
        let data = document.getElementById(target)
        currentTeam = target;
        data.classList.add("current");
        if (target === "englishTeams"){
            renderTeams(englishTeams)
            
        }
        else if (target === "laLiga"){
            renderTeams(laliga)
        }
        else if (target === "serieA"){
            renderTeams(serieA)
        }
        else if (target === "mls"){
            renderTeams(mls)
        }
        console.log(currentTeam)
    })
})



console.log(englishTeams.length)
console.log(englishTeams.length - 1);

  



// const randomNumber = Math.floor(Math.random() * 20)
// console.log(englishTeams[randomNumber])

let sogo = [1, 2, 3, 4, 5, 6, 7, 8]
function shuffleArray(array){
    for (let index = array.length - 1; index > 0 ; index--) {
        let j = Math.floor(Math.random() * (index + 1));
        [array[j], array[index]] = [array[index], array[j]]
    }
    return array; 
}

function renderTeams(array){
    shuffleArray(array);
    console.log(shuffleArray(array));
    const teams = document.querySelectorAll(".team");
    teams.forEach((team, number)=>{
        team.textContent = array[number]
    }) 
}

const scores = document.querySelectorAll(".score");
console.log(scores)
function generateRandom(){
    let randomNumber = Math.floor(Math.random() * 6);
    return randomNumber
}
  console.log(generateRandom())

  const play = ()=>{
    scores.forEach((score)=>{
        console.log(score)
        const randomScore = generateRandom();
        console.log(generateRandom());
        score.textContent = randomScore;
    })
    }




// renderTeams(laliga);
document.addEventListener("DOMContentLoaded", () => {
    renderTeams(englishTeams);
    const scores = document.querySelectorAll(".score");
    console.log(scores);
    
  });
  const datum = document.querySelectorAll("fixtures");
    console.log(datum)

  

playMatch.addEventListener("click", ()=>{
    play();
    hasPlayed = true;
    timingChecker(time)
    console.log('yes')
    console.log()
})

function timingChecker(timer){
    timer.forEach((timing)=>{
        if (!hasPlayed){
        timing.innerText = "Ready!"
        playMatch.textContent = "Play"
        }
     else{
        timing.innerText = "Finished"
        playMatch.innerText = "Play again"
        console.log("yes")
        }
})
}

const animationChecker = (needed) =>{
    needed.forEach((dating)=>{
        dating.addEventListener("animationend", ()=>{
            dating.classList.remove("animation")
        })
    })
}





