let display=document.querySelector('#display');

function appendValue(val){
    if(display.innerText==='0' || display.innerText==='ERROR!' || display.innerText==='Infinity'){
        display.innerText=val;
        return;
    }
    display.innerText=`${display.innerText}${val}`
}

function clearValue(){
    display.innerText='0';
}

function calculate(){
    try{    
     display.innerText=eval(display.innerText);
    }catch(error){
        display.innerText='ERROR!'
    }
}