const iplTeams = [
    { fullName: "Chennai Super Kings", team: "CSK", captain: "Ruturaj Gaikwad", bgColor: "Yellow", color: "Blue", trophiesCount: 5 },
    { fullName: "Mumbai Indians", team: "MI", captain: "Hardik Pandya", bgColor: "Blue", color: "Gold", trophiesCount: 5 },
    { fullName: "Royal Challengers Bengaluru", team: "RCB", captain: "Faf du Plessis", bgColor: "Red", color: "Black", trophiesCount: 1 },
    { fullName: "Kolkata Knight Riders", team: "KKR", captain: "Shreyas Iyer", bgColor: "Purple", color: "Gold", trophiesCount: 3 },
    { fullName: "Rajasthan Royals", team: "RR", captain: "Sanju Samson", bgColor: "Pink", color: "Blue", trophiesCount: 1 },
    { fullName: "Sunrisers Hyderabad", team: "SRH", captain: "Pat Cummins", bgColor: "Orange", color: "Black", trophiesCount: 1 },
    { fullName: "Delhi Capitals", team: "DC", captain: "Rishabh Pant", bgColor: "Blue", color: "Red", trophiesCount: 0 },
    { fullName: "Punjab Kings", team: "PBKS", captain: "Shikhar Dhawan", bgColor: "Red", color: "Gold", trophiesCount: 0 },
    { fullName: "Lucknow Super Giants", team: "LSG", captain: "KL Rahul", bgColor: "Blue", color: "Orange", trophiesCount: 0 },
    { fullName: "Gujarat Titans", team: "GT", captain: "Shubman Gill", bgColor: "Navy Blue", color: "Gold", trophiesCount: 1 }
];



let box = document.querySelector(".box");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let fullNameBox = document.querySelector(".full-name");
let captainName = document.querySelector(".captain");
let tCount = document.querySelector(".t-count");
btn.addEventListener("click", function () {

    let randomIndex = Math.floor((Math.random() * iplTeams.length));
    let obj = iplTeams[randomIndex];
    renderTeam(obj);
})

function renderTeam({ fullName, team, captain, bgColor, color, trophiesCount }) {
    h1.textContent = team;
    fullNameBox.textContent = fullName;
    captainName.textContent = captain;
    tCount.textContent = trophiesCount;
    box.style.backgroundColor = bgColor;
    box.style.color = color;
}


