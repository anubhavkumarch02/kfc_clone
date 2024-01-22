const imagesArray=[
    {
        src:"	https://images.ctfassets.net/wtodlh47qxpt/5gf6cz2vMpCLgQ4M4XaUaj/8a10d03ec85203e7439e113d336f949d/Zinger_pro_1440x396px.jpg?w=1366&fit=fill&fm=webp"
    },
    {
        src:"https://images.ctfassets.net/wtodlh47qxpt/5O6t7HsN1Szd1iiHWzRFSb/78e2e8b9d0d95e6f6a64cbb7d690661a/Chizza_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp"
    }
];
const top_banner=document.querySelector("#top_banner");
for(i=0;i<2;i++){
    const parentbannerDiv=document.createElement("div");
    parentbannerDiv.setAttribute('class',('parentDiv1')+(i+1));
    top_banner.appendChild(parentbannerDiv);
}
const parentDiv1=document.querySelector(".parentDiv11");
parentDiv1.innerText="LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN";
const parentDiv2=document.querySelector('.parentDiv12');
const parentBtn=document.createElement("button");
parentBtn.innerHTML="Start Order";
parentDiv2.appendChild(parentBtn);

let currentIndex=0;
function displayImage(){
    const imgElement=document.createElement('img');
    imgElement.src=imagesArray[currentIndex].src;
    document.getElementById("image-container").innerHTML="";
    document.getElementById("image-container").appendChild(imgElement);
setTimeout(()=>{
    imgElement.style.opacity=1;
},100);
currentIndex=(currentIndex+1)%imagesArray.length;
}
displayImage();
const imageInterval=setInterval(displayImage,7000);