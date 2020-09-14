const score=document.getElementById('score');
const optionsSection=document.getElementById('player_sel');
const u_select=document.getElementById('user-selected');
const c_select=document.getElementById('computer-selected');
const resultSection=document.getElementById('result');
const win=document.getElementById('win-lose');
const selectedButton=document.querySelectorAll('.select');
const playAgain=document.getElementById('play-again');
const chances=['rock','paper','scissors'];



let yourScore=0;
let userChoice=undefined;

resultSection.style.display='none';

selectedButton.forEach(button => {
    button.addEventListener('click',()=>{
        userChoice=button.getAttribute('data-choice');
        optionsSection.style.display='none';
        resultSection.style.display='inline-block';
        winner();
    })
});

playAgain.addEventListener('click',()=>{
    optionsSection.style.display='flex';
    resultSection.style.display='none';
});

function winner(){
    const computerChoice=selectRandom();
    changeChoice(u_select,userChoice);
    changeChoice(c_select,computerChoice);
    // winning match of user
    if((userChoice==="scissors" && computerChoice==="paper")||(userChoice==="paper" && computerChoice==="rock") ||(userChoice==="rock" && computerChoice==="scissors")){
        changeScore();
        win.innerHTML="YOU WON!";
    }
    //draw match
    else if(userChoice===computerChoice){
        win.innerHTML="DRAW MATCH";
    }
    //winning match of computer
    else{
        win.innerHTML="YOU LOST!"
    }
}

//Random selection of computer 
function selectRandom(){
    return chances[Math.floor(Math.random()*chances.length)];
}

function changeScore(){
    yourScore++;
    score.innerHTML=yourScore;
}

//changing the icons selected 
function changeChoice(selectedChoice,chance){
    selectedChoice.classList.remove('btn-rock');
    selectedChoice.classList.remove('btn-paper');
    selectedChoice.classList.remove('btn-scissors');
    const icons=selectedChoice.querySelector('img');
    selectedChoice.classList.add('btn-'+chance);
    console.log(chance);
    icons.src='images/icon-'+chance+'.svg';
    icons.alt=chance;
}