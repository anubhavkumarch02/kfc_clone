// location section data
const location_Image=[
    {
        src:'https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg',
        text:"Allow location access for local store menu and promos",
        btnText:"Set Location"
    }
];

// logo section image
const logo_Image=[
    {
        src:"https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg",
        text1:"Menu",
        text2:"Deals"
    }
];

// cart logo image
const cart_Image=[
    {
        src:"https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg",
        rupee:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Indian_Rupee_symbol.svg"
    }
];

// login page logo-image
const login_Image=[
    {
        src:"https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg",
        text_login:"Sign In"
    }
];


// scroll - animation section images
const scroll_Image=[
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=38.94"
    },
    {
        src:"	https://orderserv-kfc-assets.yum.com/15895bb59f7b4…f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=38.94"
    },
    {
        src:"	https://orderserv-kfc-assets.yum.com/15895bb59f7b4…3f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…933f8cd5344a/images/offers/xl/PHP75.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…33f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=38.94"
    },
    {
        src:"	https://orderserv-kfc-assets.yum.com/15895bb59f7b4…3f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=38.94"
    },
    {
        src:"	https://orderserv-kfc-assets.yum.com/15895bb59f7b4…8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…cd5344a/images/offers/xl/YAYVZINGER.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=38.94"
    }
];

// footer section image
const footer_Image=[
    {
        src:"https://images.ctfassets.net/wtodlh47qxpt/25FSYFuE…e6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
    }
];
//location section top code starts
                                // location icon code starts
                                
const location_Parent=document.querySelector("#location");
for(var i=0;i<3;i++){
    var parentDiv_location=document.createElement("div");
    parentDiv_location.setAttribute("id",('col-md-1')+(i+1));
    location_Parent.appendChild(parentDiv_location);
}
const parentLocation_image=document.querySelectorAll("#col-md-11");
const parentLoc_Image=location_Image.map(imgObj=>{
    const imgLocation=document.createElement("img");
    imgLocation.src=imgObj.src;
    return imgLocation;
});
                                // location icon code ends
                                // location text code starts
parentLoc_Image.forEach((imgLocation,i)=>{
    parentLocation_image[i].appendChild(imgLocation);
});
const text_Btn=document.querySelectorAll("#col-md-12");
const parentText_btn=location_Image.map(imgObj=>{
    const dataspan=document.createElement("p");
    dataspan.innerText=imgObj.text;
    return dataspan;
});
parentText_btn.forEach((dataspan,i)=>{
    text_Btn[i].appendChild(dataspan);
});
                                // location text code ends
                                // location button code starts
const btnData=document.querySelectorAll("#col-md-13");
const parentBtn_text=location_Image.map(imgObj=>{
    const buttonData=document.createElement("button");
    buttonData.innerText=imgObj.btnText;
    return buttonData;
});
parentBtn_text.forEach((buttonData,i)=>{
    btnData[i].appendChild(buttonData);
});
                                // location button code ends
// location section top code ends

// navbar code starts
const navbar=document.querySelector("#navbar");
for(var i=0;i<2;i++){
    var parentNavbar_div=document.createElement("div");
    parentNavbar_div.setAttribute('id',('div1')+(i+1));
    for(var j=0;j<3;j++){
        var parentDiv=document.createElement("div");
        parentDiv.setAttribute("id",('nav-1')+(j+1));
        parentNavbar_div.appendChild(parentDiv);
    }
    navbar.appendChild(parentNavbar_div);
}
const logoImg=document.querySelectorAll("#nav-11");
const parentLogo_Image=logo_Image.map(imgObj=>{
    const imgTag=document.createElement("img");
    imgTag.src=imgObj.src;
    return imgTag;
});
parentLogo_Image.forEach((imgTag,i)=>{
    logoImg[i].appendChild(imgTag);
});
const text_Menu=document.querySelectorAll("#nav-12");
const parentText_Menu=logo_Image.map(imgObj=>{
    const parent_Text1=document.createElement("p");
    parent_Text1.innerText=imgObj.text1;
    return parent_Text1;
});
parentText_Menu.forEach((parent_Text1,i)=>{
    text_Menu[i].appendChild(parent_Text1);
});
const text_Deal=document.querySelectorAll("#nav-13");
const parentText_deal=logo_Image.map(imgObj=>{
    const parent_Text2=document.createElement("p");
    parent_Text2.innerText=imgObj.text2;
    return parent_Text2;
});
parentText_deal.forEach((parent_Text2,i)=>{
    text_Deal[i].appendChild(parent_Text2);
});
const updateID1=document.querySelector("#div12>div");
updateID1.setAttribute('id','parent-1');
const updateID2=document.querySelector("#div12>div+div");
updateID2.setAttribute('id','parent-2');
const updateID3=document.querySelector("#div12>div+div+div");
updateID3.setAttribute('id','parent-3');
const updateParent=document.querySelector("#parent-1");
for(var i=0;i<2;i++){
    const newDiv=document.createElement('div');
    newDiv.setAttribute('id',('new-1')+(i+1));
    updateParent.appendChild(newDiv);
}

const login_Icon=document.querySelectorAll("#new-11");
const parentlogin_Icon=login_Image.map(imgObj=>{
    const parentLogin=document.createElement("img");
    parentLogin.src=imgObj.src;
    return parentLogin;
});
parentlogin_Icon.forEach((parentLogin,i)=>{
    login_Icon[i].appendChild(parentLogin);
});
const signIn_text=document.querySelectorAll("#new-12");
const signinParent=login_Image.map(imgObj=>{
    const parentSignin=document.createElement("p");
    parentSignin.innerText=imgObj.text_login;
    return parentSignin;
});
signinParent.forEach((parentSignin,i)=>{
    signIn_text[i].appendChild(parentSignin);
});
const updateParent3=document.querySelector("#parent-3");
for(var i=0;i<2;i++){
    const newDiv=document.createElement('div');
    newDiv.setAttribute('id',('new-3')+(i+1));
    updateParent3.appendChild(newDiv);
}
const parentNew=document.querySelector("#new-31");
for(i=0;i<2;i++){
const newSymbol=document.createElement('div')
    newSymbol.setAttribute('class',('symbol-1')+(i+1));
    parentNew.appendChild(newSymbol);
}
const rupeeSpan=document.querySelectorAll(".symbol-11");
const parentrupeeSpan=cart_Image.map(imgObj=>{
    const parentRupee=document.createElement("img");
    parentRupee.src=imgObj.rupee;
    return parentRupee;
});
const totalSpan=document.querySelector(".symbol-12");
const cartTotal=document.createElement('span');
cartTotal.innerHTML=0;
totalSpan.appendChild(cartTotal);
parentrupeeSpan.forEach((parentRupee,i)=>{
    rupeeSpan[i].appendChild(parentRupee);
});
const cartSpan=document.querySelectorAll("#new-32");
const parentcartSpan=cart_Image.map(imgObj=>{
    const parent_cart=document.createElement("img");
    parent_cart.src=imgObj.src;
    return parent_cart;
});
parentcartSpan.forEach((parent_cart,i)=>{
    cartSpan[i].appendChild(parent_cart);
});
// navbar code ends
