let gameseq =[];
let userseq = [];

let started = false;
let level = 0;

let btns = ["yello","red","purpule","green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){6
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randbtn = document.querySelector(`.${randColor}`);
   //console.log(randIdx);
   //console.log(randColor);
   //console.log(randbtn);
   gameseq.push(randColor);
   console.log(gameseq);
    gameFlash(randbtn);
}
function checkAns(idx) {
   // console.log("curr level :", level);
  // let idx = level -1;
    if(userseq[idx] === gameseq[idx]){
        if (userseq.length== gameseq.length){
          setTimeout(levelup, 1000);
        }
        

    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>press any key to start.`;
    document.querySelector("body").style.backgroundcolor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundcolor = "white";
    }, 150);
        reset();
    }


}
function btnPress(){
   // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

