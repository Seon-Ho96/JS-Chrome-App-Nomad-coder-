const game = document.querySelector('#game');
const maxNum = document.querySelector('#maxnum');
const myNum = document.querySelector('#mynum');
const explanation = document.querySelector('#explanation');
const result = document.querySelector('#result');

const HIDDEEN_CLASSNAME = "hidden";

function playGame(event){
    event.preventDefault();
    const max = maxNum.value;
    const mynum = myNum.value;
    const randNum = Math.floor(Math.random() * max + 1);
    explanation.classList.remove(HIDDEEN_CLASSNAME);
    result.classList.remove(HIDDEEN_CLASSNAME);
    explanation.innerText = `You chose: ${mynum}, the machine chose: ${randNum}`;
    if(randNum == mynum){
        result.innerText = "You Won!";
    } else{
        result.innerText = "You lost!";
    }
}

game.addEventListener("submit",playGame);
