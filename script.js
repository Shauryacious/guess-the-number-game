'use strict';
// document.querySelector('.number').textContent = secretNumber;


//Random number
let secretNumber = Math.trunc(Math.random()*20) + 1;
//Score
let life = 5;
//highscore
let highScore = 0;



//almost all inputs are string so typecast it into number
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //When input is 0
  if(!guess){
    document.querySelector('.message').textContent = "Enter a Number!! ❌";
  }

  //When player wins
  else if( guess === secretNumber){
    //Congrats message
    document.querySelector('.message').textContent = "YaY Congrats 🥳";
    //Question mark update / reveal
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    //interface change (body) when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';

    if(life>highScore){
      //Highscore Update
      document.querySelector('.highscore').textContent = life;
    }
  }

  //When guess > secretNumber
  else if(guess > secretNumber){
    document.querySelector('.message').textContent = "Too High! 📈";
    life--;
    document.querySelector(".life").textContent = life;
  }

  //When guess < secretNumber
  else if(guess < secretNumber){
    document.querySelector('.message').textContent = "Too Low! 📉";
    life--;
    document.querySelector(".life").textContent = life;
  }

  //When Player Loses
  if(life<1){
    document.querySelector('.message').textContent = "You Lost! 💥"
  }

});

document.querySelector('.again').addEventListener('click', function(){
  //New random number
  secretNumber = Math.trunc(Math.random()*20) + 1;
  //Restore BGC
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  life = 5;
  document.querySelector('.life').textContent = life;
});
