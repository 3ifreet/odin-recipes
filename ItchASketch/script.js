const myNodeList = document.querySelectorAll(".grid-item");
myNodeList.forEach((item)=>{
    item.addEventListener("hover", ()=>{
                item.style.backgroundColor = "000000";
    })
})