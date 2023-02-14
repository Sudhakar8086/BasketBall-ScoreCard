let homescoreEl = document.getElementById("home-score")
let guestscoreEl = document.getElementById("guest-score")
let prevgameEl = document.getElementById("prevGame")
let scoreboardEl = document.getElementById("scoreboard")
let count = 0;
let Count = 0;
function home1Points() {
    
    count = count + 1;
    homescoreEl.textContent = count;
}

function home2Points(){
    
    count = count + 2;
    homescoreEl.textContent = count;
}
function home3Points(){
    
    count = count +3 ;
    homescoreEl.textContent = count;
}

function guest1Points(){
    
    Count = Count + 1;
    guestscoreEl.textContent = Count;
}
function guest2Points(){
    
    Count = Count + 2;
  guestscoreEl.textContent = Count;
}
function guest3Points(){
    
    Count = Count +3 ;
    guestscoreEl.textContent = Count;
}

function newGame(){
    homescoreEl.textContent = 0; 
    guestscoreEl.textContent = 0;
    count = 0; 
    Count = 0;
}

function saveGame(){
    let total = count + " - ";
    let full = Count + " - ";
prevgameEl.textContent = prevgameEl.textContent + total;
scoreboardEl.textContent =  scoreboardEl.textContent + full;
}
