let array = [
    {
        teamname:"CSK",
        primary:"yellow",
        secondary:"darkgray",
        fullname:"Chennai Super Kings"
    },

    {
        teamname:"DC",
        primary:"red",
        secondary:"darkblue",
        fullname:"Delhi Capitals"
    },

    {
        teamname:"GT",
        primary:"lightblue",
        secondary:"darkblue",
        fullname:"Gujrat Titans"
    },

    {
        teamname:"KKR",
        primary:"gold",
        secondary:"purple",
        fullname:"Kolkata Knight Riders"
    },

    {
        teamname:"LSG",
        primary:"maroon",
        secondary:"darkblue",
        fullname:"Lucknow Super Giants"
    },

    {
        teamname:"MI",
        primary:"lightblue",
        secondary:"darkblue",
        fullname:"Mumbai Indians"
    },

    {
        teamname:"PBKS",
        primary:"red",
        secondary:"darkblue",
        fullname:"Punjab Kings"
    },

    {
        teamname:"RR",
        primary:"pink",
        secondary:"darkblue",
        fullname:"Rajsthan Royals"
    },

    {
        teamname:"RCB",
        primary:"black",
        secondary:"red",
        fullname:"Royal Challengers Bengaluru"
    },

    {
        teamname:"SRH",
        primary:"orange",
        secondary:"red",
        fullname:"Sunrises Hyderbad"
    },
];

let nickname=document.querySelector("h3");
let fullname=document.querySelector("h1");
let box=document.querySelector("#box");
let button=document.querySelector("button");
let container=document.querySelector(".container");

button.addEventListener("click",function()
{
    let num=array[Math.floor(Math.random()*array.length)];
    nickname.innerHTML=num.teamname;
    fullname.innerHTML=num.fullname;

    box.style.backgroundColor=num.primary;
    container.style.backgroundColor=num.secondary;
});