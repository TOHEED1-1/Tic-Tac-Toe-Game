let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let container = document.querySelector(".winning-msg");
let winMsg = document.querySelector(".win-Msg");
let winningArr = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [2, 5, 8],
];

//turing the number of player
let count = 0;
let turnO = true;
box.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (gameOver) return;
    if (turnO) {
      btn.innerText = "O";
      btn.classList.add("o");

      turnO = false;
    } else {
      btn.classList.add("x");
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    count++;
    checkWinner();
    if (count === 9 && !gameOver) {
      matchDraw();
    }
  });
});

//disabling button===>call it on winning match and drawing match
function disableButton() {
  for (let butn of box) {
    butn.disabled = true;
  }
}
//to unhide message for Game-Over
function matchDraw() {
  winMsg.innerText = "The Message is Draw";
  container.classList.remove("hide");
  disableButton();
}
//to unhide the message for winner
let gameOver = false;
function winner(value) {
  gameOver = true;
  winMsg.innerText = `The Player of ${value} is Winner`;
  container.classList.remove("hide");
  disableButton();
}
//looping values of array
function checkWinner() {
  for (let pattern of winningArr) {
    let box1Val = box[pattern[0]].innerText;
    let box2Val = box[pattern[1]].innerText;
    let box3Val = box[pattern[2]].innerText;
    if (box1Val != "" && box2Val != "" && box3Val != "")
      if (box1Val === box2Val && box2Val === box3Val) {
        winner(box1Val);
        return;
      }
  }
}

//giving logic to restart the game
function reStartGame() {
  turnO = true;
  container.classList.add("hide");
  count = 0;
  gameOver = false;
  for (let butn of box) {
    butn.innerText = "";
    butn.classList.remove("x");
    butn.classList.remove("o");
    butn.disabled = false;
  }
}
resetBtn.addEventListener("click", reStartGame);
newBtn.addEventListener("click", reStartGame);
