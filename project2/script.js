let userContainer = document.querySelector('#userContainer');
let searchInput = document.querySelector('#searchBar');

const users=[
    {
        profileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwsVy5oLRkM6qmmWfEAo4oUbK8L5aodHgPQ&s",
        name:"karna",
        email:"karunakarReddy@gmail.com",
    },

    {
        profileUrl:"https://www.bringitonline.in/uploads/2/2/4/5/22456530/s300614706325520039_p4_i1_w569.png",
        name:"srinu",
        email:"srinuelegant@gmail.com",
    },

    {
        profileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMFwaEec4cH-991Q9UXL-aDXAEHsyocLe6g&s",
        name:"kiran",
        email:"kiranmacha@gmail.com",
    },

    {
        profileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiMiqVMxg3GAUfyMe4oXjUA5fUpnbmsSdIQ&s",
        name:"Hari",
        email:"hariprasad@gmail.com",
    }

]


function renderUsers(arr){

     userContainer.innerHTML='';

    if(arr.length===0){
        let noUserText= document.createElement('p');
        noUserText.innerText="no users available!";
        userContainer.append(noUserText);      
    }else{

    


    arr.map(function (obj){

    let divEle=document.createElement('div');
    divEle.className='userItem';
    divEle.innerHTML=`
           <div id="image">
                    <img src=${obj.profileUrl} alt=" error loading image ">
                </div>
                <div id="userInfo">
                    <h3 id ="name"> ${obj.name} </h3>
                    <p id="mail"> ${obj.email} </p>
              </div>
    `
    userContainer.appendChild(divEle);

    
});}

}

renderUsers(users);

function handleSearch(e){
     let searchValue=e.target.value.toLowerCase();
     let filteredUsers=users.filter(obj =>{
        return obj.name.toLowerCase().includes(searchValue) || obj.email.toLowerCase().includes(searchValue);
     })
     renderUsers(filteredUsers);

}

searchInput.addEventListener('input', handleSearch)


