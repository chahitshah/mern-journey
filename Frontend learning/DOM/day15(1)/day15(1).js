

// var btn = document.querySelector("button");



// let display = document.querySelector("main");


// btn.addEventListener("click",function(){
//     let div =document.createElement("div");
//     let x=Math.floor(Math.random()*100);
//     let y=Math.floor(Math.random()*100);
//     let a=Math.floor(Math.random()*256);
//     let b=Math.floor(Math.random()*256);
//     let c=Math.floor(Math.random()*256);
//     let r=Math.floor(Math.random()*360);
//     div.style.height='100px'
//     div.style.width='100px'
//     div.style.backgroundColor=`rgb(${a},${b},${b})`;
//     div.style.position = "absolute";
//     div.style.left=x+'%';
//     div.style.top=y+'%'
//     div.style.rotate=r+'deg';

//     display.appendChild(div);
// })


var btn = document.querySelector("button");

let main = document.querySelector("main");

let array=["padh le bhai","kyu nahi horahi he padhai ??","police agayi police","Apki tarah me bhi mayush hu","ayeee baigan","AQI"];
btn.addEventListener("click",function(){
    let num=Math.floor(Math.random()*array.length);
    let h1=document.createElement("h1");

    let x=Math.floor(Math.random()*100);
    let y=Math.floor(Math.random()*100);
    let r=Math.floor(Math.random()*360);
    let scl=Math.floor(Math.random()*3);

    h1.innerText=array[num];
    h1.style.position = "absolute";
    h1.style.left=x+'%';
    h1.style.top=y+'%';
    h1.style.rotate=r+'deg';
    h1.style.scale=scl;
    h1.style.color="white";

    main.appendChild(h1);
})


