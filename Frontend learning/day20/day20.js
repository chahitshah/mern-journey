const para= document.querySelector("p");
const h4=document.querySelector("h4")
const h6=document.querySelector("h6")
const characters ="ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklomnopqrstuvw";
const text1 = para.innerText;
const text2 = h4.innerText;
const text3 = h6.innerText;
iteration=0;
para.addEventListener("mouseenter",function(){
    setInterval(() => {
        const str = text1.split('').map(function(char,index){
            if(index<iteration)
            {
                return char;
            }
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("");

        para.innerText=str;
        iteration+=0.2;    
    },100);
     iteration=0;
})


h4.addEventListener("mouseenter",function(){
    setInterval(() => {
        const str = text2.split('').map(function(char,index){
            if(index<iteration)
            {
                return char;
            }
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("");

        h4.innerText=str;
        iteration+=0.2;  
    },100); 
    iteration=0;
})

h6.addEventListener("mouseenter",function(){
    setInterval(() => {
        const str = text3.split('').map(function(char,index){
            if(index<iteration)
            {
                return char;
            }
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("");

        
        h6.innerText=str;
        iteration+=0.2;  
    },100); 
    iteration=0;
})