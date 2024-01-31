document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 101);
    let remainingTrial = 5;
  
    console.log(randomNumber);
  
    alert("GUESS GAME: We kept a number between 0-100. Please guess the number!");
  
    for (let trial = 1; trial <= 5; trial++) {
      const userGuess = Number(prompt("Please guess the number!"));
      /*  console.log(`Your number is :${userGuess}`); */
      /*  alert(userGuess); */
      if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        alert("Invalid login. Please enter a number between 0 and 100.");
        continue;
      }
      if (userGuess === randomNumber) {
        alert(`Congrast! You guessed it right on the ${trial}. try. `);
        break;
      } else {
        remainingTrial--;
        if (remainingTrial > 0) {
          const hint = userGuess < randomNumber ? "INCREASE" : "DECREASE";
          alert(
            `Unfortunately wrong! Remaining trial: ${remainingTrial}. Please ${hint} the number.`
          );
        } else {
          alert(`Sorry you lost. The correct number is ${randomNumber}.`);
        }
      }
    }
  });
  