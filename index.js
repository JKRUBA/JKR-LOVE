var msg1=document.querySelector('#msg1');
var msg2=document.querySelector('#msg2');
var msg3=document.querySelector('#msg3');


var result = Math.floor(Math.random()*100);
console.log(result);

var no_of_guess = 0;
 
var guessedNum = [];
function play()
{
    var userGuess = document.querySelector('#guess').value;

    if(userGuess < 1 || userGuess >100 )
    {
        alert('Please Enter the number between 1 to 100')
    }
    else{
         guessedNum.push(userGuess);
         no_of_guess=no_of_guess+1;
    }

    if(userGuess < result)
    {
        msg1.textContent="R go back Jk proposed u🙊";
        msg2.textContent="Number of guesses :" + no_of_guess;
        msg3.textContent="Guessed Number :"+ guessedNum;

    }
    if(userGuess>result)
        {
            msg1.textContent="R go ahead Jk waiting🏃";
            msg2.textContent="Number of guesses :" + no_of_guess;
            msg3.textContent="Guessed Number :" +guessedNum;
    
        }
        if(userGuess==result)
        {
            
                msg1.textContent="JK LOVE YOU R❤️🌹";
                msg2.textContent="Congratulations JK!!";
                msg3.textContent="Ruba accepts your love❤️!!";
        
            }
    }

