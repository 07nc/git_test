const result=document.querySelector(".result");
var yourscore=0,computerscore=0;
function playRound(human,computer){
    if((human==="Scissors" &&computer==="Paper") || (human==="Paper"&&computer==="Rock") || (human==="Rock"&&computer==="Scissors")){
        result.textContent=`You won`;
        yourscore++;
    }else if((human==="Scissors" &&computer==="Rock") || (human==="Paper"&&computer==="Scissors") || (human==="Rock"&&computer==="Paper")){
        result.textContent=`You lost`;
        computerscore++;
    }else{result.textContent=`Draw`};
}
const buttons=document.querySelectorAll("button");

const userOption=document.querySelector(".userOption");
const compOption=document.querySelector(".compOption");
const scoreBoard=document.querySelector(".score")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    const op=Math.floor(Math.random()*3);
    var choice;
    if(op===0){choice="Rock"}else if(op===1){choice="Paper"}else{choice="Scissors"};
    userOption.textContent=`The option you selected is : ${button.textContent}`;
    compOption.textContent=`The option computer selected is: ${choice}`;
    playRound(button.textContent,choice);
    scoreBoard.textContent=`Your Score : ${yourscore} Computer's Score : ${computerscore}`;
});
});



