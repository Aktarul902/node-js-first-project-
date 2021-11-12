const socket =io();
// var a= new Audio("ting.mp3");
// a.play();
// let play = true;
let Name;
// let audio = document.createElement("AUDIO");
// audio.setAttribute("src","ting.mp3")
let sendbtn=document.querySelector("#send")
let chat = document.querySelector("#chat")
let send = document.querySelector(".outgoing")
let user = document.querySelector(".user");
let container = document.querySelector(".container")
do{
    Name=prompt("Enter Your Name please")
}while(!Name);
sendbtn.addEventListener("click",sendmassage);
function sendmassage(){
    let massage = chat.value;
    console.log(massage);
    listenmassage(massage);      
    // userjoin();
}
// function userjoin(user){
//     let userjoinName={
//         joinuser:Name,
//     }
//     socket.emit("user-join",user)
// }
function listenmassage(massageoutput){
    let msg={
        username:Name ,
        massage1:massageoutput
    }
    console.log(msg);
    appendmassage(msg,"outgoing")
    socket.emit("massage",msg)
}
function appendmassage(msg,type){
  
    let maindiv= document.createElement("div");
    maindiv.classList.add=type;
    let markup = `
    <p class="user">${msg.username}</p>
    <p class="outgoing">${msg.massage1} </P>
    `
    maindiv.innerHTML=markup
    container.appendChild(maindiv)
}
socket.on("massage",(msg)=>{
    console.log(msg);
    let serverdiv=document.createElement("div");
    incom=`
    <p class="incoming">${msg.massage1}</p>
    <p class="user2">${msg.username}</p>`
    serverdiv.innerHTML=incom;
    container.appendChild(serverdiv)
    console.log(msg.username);
})
// socket.on("user-join",(joinuser)=>{
//     console.log(joinuser);
// })



