console.log("JavaScript Loaded Successfully!"); //check
let user = '';
while(!user){
 user =  document.getElementById('user').innerHTML = prompt("Enter Your Name");

}

const resultParent = document.getElementById('resultParent');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const result = document.getElementById('result');


const choiceBtn = document.querySelectorAll('.choiceBtn'); //nodelist return
console.log(choiceBtn);

choiceBtn.forEach((btn) => {

    btn.addEventListener('click', () => {
        let playerImg = document.createElement('img');
        let playerChoice = btn.id;

        if (playerChoice == "paper") {
            playerImg.src = "images/paper-removebg-preview.png";
            console.log(playerImg);
            player.innerHTML = '';
            player.append(playerImg);

        }

        else if (playerChoice == "rock") {
            playerImg.src = "images/rock-removebg-preview.png";
            console.log(playerImg);
            player.innerHTML = '';
            player.append(playerImg);
        }

        else {
            playerImg.src = "images/scessior-removebg-preview.png";
            console.log(playerImg);
            player.innerHTML = '';
            player.append(playerImg);
        }

let compChoice = computerTurn(); //chatGPT (sir se pochun ga);
console.log(compChoice);
console.log(playerChoice);
let resMesg = determineWinner(playerChoice,compChoice);
result.innerText = resMesg;
result.style.color = "white";
// result.style.fontSize = "40px";
result.style.fontWeight = "400";

    });
});

function computerTurn() {
    let comp1 = document.createElement("img");
    let arr = ["images/paper-removebg-preview.png", "images/rock-removebg-preview.png", "images/scessior-removebg-preview.png"];
    let choose = Math.floor(Math.random() * 3);
    // console.log(choose);
    // console.log(arr[choose]);
    comp1.src = arr[choose];
    console.log(comp1);
    computer.innerHTML='';
    computer.append(comp1);
    
    return arr[choose].replace("images/", "").replace("-removebg-preview.png", ""); 

}

function determineWinner(playerChoice,compChoice){
  let msg;
    if(playerChoice=="rock" && compChoice=="paper" || playerChoice=="scessior" && compChoice=="rock" || playerChoice=="paper" && compChoice=="scessior" ){
    
    console.log("comp win");
    resultParent.style.backgroundColor = "red";
    return msg = "COMP WIN !!";

   }

  else if(playerChoice==compChoice){
    console.log("Tie");
    resultParent.style.backgroundColor = "rgb(218, 193, 3)";
    return msg = "Draw";

   }
   else{
    console.log('Player Win');
    resultParent.style.backgroundColor = "rgb(108, 194, 28)";
  
    return msg = user.toUpperCase() + " WIN !!";
   }
}

//reset Functiom
function reset(){
    player.innerHTML = '';
    computer.innerHTML = '';
    result.innerHTML = '';
    resultParent.style.backgroundColor = "transparent";
}
