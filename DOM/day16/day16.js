//part 1 DOM practise 
// let h1 = document.querySelector(".info h1");

// let btn=document.querySelector("button");

// let wd=document.querySelector(".inner");
// let grow=0;
// btn.addEventListener("click",function()
// {
    
//     btn.style.pointerEvents = "auto";
//     let num=50+Math.floor(Math.random()*50)
    
//     let ti =setInterval(function(){
//         grow++;
//         h1.innerHTML=grow+'%';
//         wd.style.width=grow+'%';
//     },num)

//     setTimeout(function()
// {
//      clearInterval(ti);
//      btn.innerHTML="Downloaded";
//      btn.style.pointerEvents='none';  
//      btn.style.opacity=0.5;
     
// },num*100)

    
// })

var card=document.querySelector(".card");
var love=document.querySelector("#img i");

card.addEventListener("dblclick",function()
{
    love.style.opacity=0.9;
    love.style.transform="translate(-50%,-50%) scale(1) rotate(-0deg)";
    
    setTimeout(function()
{
    love.style.transform="translate(-50%,-400%) scale(1) rotate(-0deg)";
    love.style.opacity = 0;
},800)
})