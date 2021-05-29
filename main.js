/*
* Zadanie na start:
*
* ~ Ustalamy tytuł naszej gry.
*
*
* W element h1 znajdujący się w header.hero,
* wpisz z poziomu JavaScript tekst: "Papier Kamień czy Nożyce ?!"
*
* */

const gameTitle = 'Papier Kamień czy Nożyce ?!';

// const h1 = document.querySelector('#game-title');
const h1 = document.getElementById('game-title');
console.log(h1);
h1.innerText = gameTitle;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const infoBox = document.querySelector('#info');
console.log(infoBox);


// console.log(btnPaper, btnRock, btnScissors);



btnRock.addEventListener('click', function(){
   playGameRound('rock');
});
btnPaper.addEventListener('click', function(){
    playGameRound('paper');
});
btnScissors.addEventListener('click', function(){
    playGameRound('scissors');
});


function makePCChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    //losuj liczbę w zakresie 0 - choices.length-1
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(randomIndex);
    return choices[randomIndex];
}


function playGameRound(playerChoice){
    const pcMove = makePCChoice();
    console.log(pcMove);
    const winCondition1 = playerChoice === 'paper' && pcMove === 'rock';
    const winCondition2 = playerChoice === 'rock' && pcMove === 'scissors';
    const winCondition3 = playerChoice === 'scissors' && pcMove === 'paper';
    if(pcMove === playerChoice){
        console.log("Remis");
        infoBox.innerHTML = `
            <div class="message is-warning">
                <div class="text-small">
                    Komputer wybrał: <img width="64" src="assets/${pcMove}.svg">
                </div>
            </div> 
            `

    } else if(winCondition1 || winCondition2 || winCondition3){
     console.log('Wygrana');
     infoBox.innerHTML = `
        <div class="message is-success">
            <div class="text-small">
                Komputer wybrał: <img width="64" src="assets/${pcMove}.svg">
            </div>
        </div> 
        `
    }  else {
        console.log('Przegrałeś');
        infoBox.innerHTML = `
            <div class="message is-danger">
                <div class="text-small">
                    Komputer wybrał: <img width="64" src="assets/${pcMove}.svg">
                </div>
            </div> 
            `
    }
    
    }

