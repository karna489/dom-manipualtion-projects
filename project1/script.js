
let randomColorBtn=document.querySelector("#randomBtn");
let applyColorBtn=document.querySelector("#applyColorBtn");
let currentColorText=document.querySelector("#currentColorText");
let inputColor=document.querySelector("#inputColor");
let body=document.querySelector("body");

const colorArray=['red','blue','green','violet','orange','white','aqua','black','purple','lightgreen','pink','yellow'];


const colorChanger=(c)=>{
    body.style.backgroundColor=c;
}

const randomGenerator=()=>{
    return Math.floor(Math.random()*colorArray.length);
}

const  handleApplyBtnClick=()=>{
     colorChanger(inputColor.value);
     currentColorText.innerText=inputColor.value;
     inputColor.value="";
}

const handleRandomBtnClick=()=>{
     let idx=randomGenerator();
     colorChanger(colorArray[idx]);
     currentColorText.innerText=colorArray[idx];
}


applyColorBtn.addEventListener('click', handleApplyBtnClick);
randomColorBtn.addEventListener('click', handleRandomBtnClick);





