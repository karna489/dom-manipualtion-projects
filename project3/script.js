let addButton =document.querySelector("#addButton");
let removeButton =document.querySelector(".removeButton");
let listContainer = document.querySelector("#listContainer");
let inputText=document.querySelector("#inputText");

console.log(removeButton);

let list=[];


function renderList() {
    listContainer.innerHTML = '';

    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list';

        const p = document.createElement('p');
        p.textContent = item.text;

        const btn = document.createElement('button');
        btn.className = 'removeButton';
        btn.textContent = 'remove';

        btn.addEventListener('click', () => {
            list = list.filter(obj => obj.id !== item.id);
            renderList();
        });

        div.append(p, btn);
        listContainer.append(div);
    });
}




function addHandleFunc(){

    if(inputText.value===""){
     alert("enter someThing dude")
     return;
    }

    let  obj={
        id:Date.now(),
        text:inputText.value
    };

    list.push(obj);
    renderList();
    inputText.value='';
    console.log(list);
}


addButton.addEventListener('click', addHandleFunc);


