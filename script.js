var count=0;
const yesBtnInit= ()=>{
    document.getElementById('yesButton').style.width="200px";
    document.getElementById('yesButton').style.height="150px";
    document.getElementById('yesButton').style.fontSize="30px";
}

const incrementYesBtn=()=>{
    var yesButton = document.getElementById('yesButton');
    yesButton.style.height = (parseInt(yesButton.style.height.slice(0,-2))*1.2)+"px"; 
    yesButton.style.width = (parseInt(yesButton.style.width.slice(0,-2))*1.2)+"px";        
    yesButton.style.fontSize = (parseInt(yesButton.style.fontSize.slice(0,-2))*1.2)+"px";   
}
const changeNoResponse=()=>{
    var noResponseElem = document.getElementById('noResponse');
    const responses=["Rawan mathazareesh ba2a","7awli tani","La2","Yala M3lesh","Yala sa3at feeh 7agat bteb2a keda","Esteb7i badal malatashlek","3eeb walahi","Bgad y rawan!!","3ala goseti","Koli 5ara"];
    noResponseElem.innerText=responses[Math.floor((Math.random()*10))]
}

const displayHeartLoader=()=>{
let heartLoader=document.createElement("img");
heartLoader.src="./Animation - 1707766162587.gif";
heartLoader.id="heartLoader";
document.querySelector("#btnsAndResponse").replaceChildren(heartLoader);
}

const yesBtnOnClick=()=>{
    displayHeartLoader();
    setTimeout(() => {
        document.querySelector("#btnsAndResponse").innerHTML="";   
        showInvitation();
        }, 2000);
}
const showInvitation=()=>{
    let invitation= document.createElement("div");
    invitation.innerHTML="<p>Save the Date 14/02/2024</p>";
    invitation.classList.add("saveThedate");
    document.querySelector("#btnsAndResponse").replaceChildren(invitation);
}

const timerToShowProposal=()=>{
    setTimeout(() => {
    document.querySelector("#btnsAndResponse").innerHTML="";   
    }, 2000);
}
function noBtnOnClick() {
    count++;
    if(count<10){
        incrementYesBtn();
        changeNoResponse();
    }
    else{
        document.getElementById('noButton').style.backgroundColor="chartreuse";
        document.getElementById('noButton').innerText="Yes";
        document.getElementById('noButton').addEventListener('click',yesBtnOnClick);
    }
    
}
yesBtnInit();

document.getElementById('noButton').addEventListener('click',noBtnOnClick);
document.getElementById('yesButton').addEventListener('click',yesBtnOnClick);
