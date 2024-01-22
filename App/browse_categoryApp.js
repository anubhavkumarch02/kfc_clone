const browse_CategoryImage=[
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…3f8cd5344a/images/categories/CAT224.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…33f8cd5344a/images/categories/CAT86.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…3f8cd5344a/images/categories/CAT190.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…3f8cd5344a/images/categories/CAT158.jpg?ver=38.94"
    },
    {
        src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4…33f8cd5344a/images/categories/CAT99.jpg?ver=38.94"
    },
    {
        src:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
    }
];
const browse=document.querySelector("#browse");
for(i=0;i<2;i++){
    const parentBrowse=document.createElement("div");
    parentBrowse.setAttribute("class",("parent-browse")+(i+1));
    browse.appendChild(parentBrowse);
}
const parentbrowse1=document.querySelector(".parent-browse1");
parentbrowse1.innerText="BROWSE CATEGORIES";


