
let addButton =document.querySelector("#addButton");
let listContainer = document.querySelector("#listContainer");
let inputText=document.querySelector("#inputText");
let API ='https://69b69d14583f543fbd9e2090.mockapi.io/api/v1/todos';


showData();
async function showData(){
    let response = await fetch(API);
    let data =await response.json();
    renderList(data); 
}


async function renderList(obj) {
    listContainer.innerHTML = '';

    obj.forEach(item => {

        const div = document.createElement('div');
        div.className = 'list';

        const btnContainer=document.createElement('div');
        btnContainer.className='buttonContainer';

        const p = document.createElement('p');
        p.textContent = item.text;

        const removeBtn = document.createElement('button');  
        removeBtn.className = 'removeButton';
        removeBtn.textContent = 'remove';

        const editBtn = document.createElement('button');
        editBtn.className='editButton';
        editBtn.textContent ='edit';
        
        const editInput=document.createElement('input');
        editInput.className='editInput';


        const saveBtn= document.createElement('button');
        saveBtn.className='saveBtn';
        saveBtn.textContent='save';



        removeBtn.addEventListener('click', () => {
             removeItem(item.id);
        });

        editBtn.addEventListener('click',()=>{
             editBtn.style.display='none';
             saveBtn.style.display='inline';
             p.style.display='none';
             editInput.style.display='inline';
             editInput.value=item.text;

        });

        saveBtn.addEventListener('click',async ()=>{
             p.innerText='';
             await updateData(item.id,editInput.value);
             editBtn.style.display='inline';
             saveBtn.style.display='none';
             p.style.display='inline';
             editInput.style.display='none';
        });
        

        btnContainer.append(removeBtn,editBtn,saveBtn);
        div.append(p,editInput,btnContainer);
        listContainer.prepend(div);
    });

}

async function removeItem(id){

    let response=  await fetch(`${API}/${id}`,{
        method:'DELETE',
    })

    if(response.status=== 200){
        showData();
    }
}



 async function addHandleFunc(){

    if(inputText.value===""){
     alert("enter someThing dude")
     return;
    }

    let objData = {
        text: inputText.value.trim()
    }
    
    let response = await fetch(API ,{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objData),
    } )

   if(response.status === 201){    
      showData();
   }

   inputText.value='';
}



 async function updateData(id , value){

    let objData = {
        text: value.trim()
    }
    
    let response = await fetch(`${API}/${id}`,{
        method:'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objData),
    } )


   if(response.status === 200){    
      showData();
   }
}
addButton.addEventListener('click', addHandleFunc);


