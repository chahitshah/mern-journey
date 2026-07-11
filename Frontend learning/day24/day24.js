let main = document.querySelector("main");
let icon = document.querySelector(".icon");
let windowinfo = document.querySelector(".info");
let div = document.createElement("div");
div.className="content";
div.innerHTML="<p>Content goes here</p>";


let display = false;
icon.addEventListener("click",function(){
    if(!display){
        main.appendChild(div);
        display=true;
    }
    else{
        div.remove();
        display=false;
    }
})

main.addEventListener("dblclick", function (e) {
    if (windowinfo.style.display === "block") {
        windowinfo.style.display = "none";
    } else {
        windowinfo.style.display = "block";

        windowinfo.style.left = e.clientX + "px";
        windowinfo.style.top = e.clientY + "px";
    }
});