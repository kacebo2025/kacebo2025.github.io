// COMPUTER

const computer = "COMPUTER";
const characters = ["_", "_", "_", "_", "_", "_", "_", "_"];
let word = characters.join(' ');
let mistakes = 0;
let maxWrong = 6;

function input(letter) {
  for (i = 0; i < 8; i++) {
    if (letter == computer.charAt(i)) {
      console.log(computer.charAt(i));
      characters[i] = letter;
      break;
    }
    else if (i == 7) {
      mistakes++;
    }
  }
  updateWord();
  updatePic();
  checkGameWin();
  checkGameLost();
}

function checkGameWin(){
  if (document.getElementById('text').innerHTML == "C O M P U T E R") {
    document.getElementById('keyboard').innerHTML = '<div class="text">You Won!!!</div>';
  }
}

function checkGameLost(){
  if (mistakes == maxWrong){
    document.getElementById('text').style.fontSize = "36px";
    document.getElementById('text').innerHTML = "The answer was COMPUTER";
    document.getElementById('keyboard').innerHTML = '<div class="text">You Lost!</div>';
  }
}

function disappear(elem) {
  elem.style.opacity = "0.5";
  elem.style.pointerEvents = "none";
}
function reappear() {
  const buttonlist = document.querySelectorAll(".key")
  buttonlist.forEach(element => {
  element.style.opacity = "1.0";
  element.style.pointerEvents = "auto";
  })
}
function updateWord(){
  word = characters.join(' ');
  document.getElementById('text').innerHTML = word;
  document.getElementById('mistakes').innerHTML = mistakes;
}

function updatePic() {
  document.getElementById('hangmanPic').src = "images/" + mistakes + '.jpg';
  document.getElementById('hangmanPic').alt =  'hangman' + mistakes;
}

document.getElementById('text').innerHTML = word;
document.getElementById('hangmanPic').innerHTML = "images/0.jpg"
