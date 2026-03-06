let mainContainer = document.querySelector("#mainContainer");
let container = document.querySelector("#container");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");
let target = document.querySelector("#target");
let showScore = document.querySelector("#showScore");



const circlesRequired = 60;
let timerValue = 20;

function generateTarget() {
  let num = Math.ceil(Math.random() * 10);
  target.innerText = num;
}


function generateNumbers(){
    container.innerHTML='';
    for (let i = 0; i < circlesRequired; i++) {
      let elem = document.createElement("div");
      elem.className = "circle";
      let num = Math.ceil(Math.random() * 10);
      elem.innerText = num;
      container.append(elem);
    }
}

generateNumbers();



setInterval(() => {
  if (timerValue <= 0) {

    let restartBtn = document.createElement("button");
    restartBtn.id = "restartBtn";
    restartBtn.innerText = "restart";

    let elem = document.createElement("div");
    elem.className = "gameOver";
    elem.innerHTML = `
    <h1>game-over dude!</h1>
    <h3>your score : <span>${score.innerText}</span></h3>
    `;

    elem.append(restartBtn);
    restartBtn.addEventListener('click',()=>{
       timerValue=20;
    //    elem.remove();
       score.innerText="0";
       generateTarget();
       generateNumbers();
       return;
    })
    container.innerHTML = "";
    elem.style.display = "flex";
    container.append(elem);
    return;
  }
  timerValue--;
  timer.innerText = timerValue;
}, 1000);



container.addEventListener("click", (event) => {
  if (event.target.className === "circle") {
    if (Number(event.target.innerText) === Number(target.innerText)) {
      let sc = Number(score.innerText);
      sc += 10;
      score.innerText = sc;
      generateTarget();
    } else {
      generateTarget();
    }
  }
});


