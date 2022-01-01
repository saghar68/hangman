const  secretPhrases = ["never","you", "that", "bullet", "break"];

let randomItem = "";
let clicked = [];
let result = "";
let mistake = 0;

function selectRandomitem () {
    randomItem = secretPhrases[Math.floor(Math.random()* secretPhrases.length)];
    window.addEventListener("keydown", keyHandeler)
    document.getElementById("letters").addEventListener("click", buttonHandler) 
    console.log(randomItem)
        
}


 function setunderScroes () {
     let splitedWord = randomItem.split("");
     let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"));
     result = mappedWord.join("");
     document.getElementById("clue").innerHTML = `<p>${result}</p>`
 }

 function checkIfwon () {
     if (randomItem === result) {
         document.getElementById("gameover").querySelector("p").style = "block";
         document.getElementById("image").querySelector("img").src = "image/winner.png"
     }
 }

function checkIflost() {
    if (mistake === 6) {
        document.getElementById("gameover").querySelector("p").style = "block";
        document.getElementById("clue").innerHTML = `<p>Random word is ${randomItem}</p>`;
    }
}



function updateHangmanPicture () {
    const image = document.getElementById("image").querySelector("img");
    image.src = `image/hangman${mistake}.png`
}



function letterHandler(letter) {
   letter = letter.toLowerCase();
   clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
   document.getElementById(letter.toUpperCase()).className = "used";
   if (randomItem.indexOf(letter) >= 0) {
       setunderScroes();
       checkIfwon();

   } else if (randomItem.indexOf(letter) === -1) {
       mistake++;
       checkIflost();
       updateHangmanPicture();

   }
}

function keyHandeler () {
    letterHandler(event.key)
}


function buttonHandler () {
    letterHandler(event.target.id)
  
}


selectRandomitem();
setunderScroes();
