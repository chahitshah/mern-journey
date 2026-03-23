let current="";

let divide=document.querySelector(".divide");
let multiply=document.querySelector(".multiply");
let minus=document.querySelector(".minus");
let plus=document.querySelector(".plus");

let d =document.querySelector(".delete");
let enter=document.querySelector(".enter");


let seven=document.querySelector('.seven');
let eight=document.querySelector('.eight');
let nine=document.querySelector('.nine');
let four=document.querySelector('.four');
let five=document.querySelector('.five');
let six=document.querySelector('.six');
let one=document.querySelector('.one');
let two=document.querySelector('.two');
let three=document.querySelector('.three');
let zero=document.querySelector('.zero');



let display =document.querySelector("#answerbox h1");

divide.addEventListener("click",function()
{
    current+='/';
    display.innerHTML=current;
});


multiply.addEventListener("click",function()
{
    current+='*';
    display.innerHTML=current;
});


minus.addEventListener("click",function()
{
    current+='-';
    display.innerHTML=current;
});


plus.addEventListener("click",function()
{
    current+='+';
    display.innerHTML=current;
});

seven.addEventListener("click",function()
{
    current+='7';
    display.innerHTML=current;
});

eight.addEventListener("click",function()
{
    current+='8';
    display.innerHTML=current;
});

nine.addEventListener("click",function()
{
    current+='9';
    display.innerHTML=current;
});

four.addEventListener("click",function()
{
    current+='4';
    display.innerHTML=current;
});

five.addEventListener("click",function()
{
    current+='5';
    display.innerHTML=current;
});

six.addEventListener("click",function()
{
    current+='6';
    display.innerHTML=current;
});

one.addEventListener("click",function()
{
    current+='1';
    display.innerHTML=current;
});

two.addEventListener("click",function()
{
    current+='2';
    display.innerHTML=current;
});

three.addEventListener("click",function()
{
    current+='3';
    display.innerHTML=current;
});

zero.addEventListener("click",function()
{
    current+='0';
    display.innerHTML=current;
});

d.addEventListener("click",function()
{
    current="";
    display.innerHTML=current;
});

enter.addEventListener("click",function()
{
    current = eval(current);
    display.textContent = current;
});
