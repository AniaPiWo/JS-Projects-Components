let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".ttt-popup");
let newgameBtn = document.getElementById("ttt-new-game");
let restartBtn = document.getElementById("ttt-restart");
let msgRef = document.getElementById("ttt-message");
//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;

//disable all buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled - true))
    //enable popup
    popupRef.classList.remove("ttt-hidden")
};

//this function is executed when player wins
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

//function for draw
const drawFunction = () => {
       disableButtons();
        msgRef.innerHTML = "&#x1F60E; <br> It's a draw!";
}

//enable all buttons(for new game and restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false
    });
    //disable popup
    popupRef.classList.add("ttt-hidden")
};

//New game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})


//win logic
const winChecker = () => {
    //loop through all win paterna
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
    //check if elements are filled
    //if 3 empty elements are same and would give win
        if (element1 != "" && element2 != "" & element3 != "") {
            if (element1 == element2 && element2 == element3) {
                //if all 3 are same values pass them to value winFunction
                winFunction(element1)
            }
        }
    }
};

//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
      }
    //increment count on each click
      count += 1;
      if (count == 9) {
    // its a draw - all boxes are filled
    drawFunction();
      }
    //check for win after every click
      winChecker();

  });
});

//enable buttons and disable popup on page load
window.onload = enableButtons;

