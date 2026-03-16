// Introduction to JavaScript
// 1. Open any website → right-click → Inspect → Console → type: document.title
// 2. Try: alert(“Hello from Sheryians!”)
// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
// is JS?”
// 4. Write one example of where you’ve seen JS being used (like popup,
// animation, etc.)
// Goal: Observe what JS does on a webpage.

// alert("hello from Sheriyans")

// console.log("If HTML is skeleton, CSS is clothes")



// 1. Open console and type: 2 + 2
// 2. Type: alert(“Hi”)
// 3. Try: prompt(“Your name?”)
// 4. Type: let city = “Bhopal”; city

// console.log(2+2)

// let a = prompt("Your name ")

// console.log(a)

// let city = "Bhopal";
// console.log(city)


// Variables and Keywords (var, let, const)
// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
// = “School”
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)


// var a = "heheheuhe"
// console.log(a)
// let b = "lee lavdeee"
// console.log(b)
// const c = "shool"
// console.log(c)

// a="chhait"
// b="ching chong chueee"
// c="school"
// console.log(c)

// Logging and Interaction (console, alert, prompt)
// 1. Log name, age, and city using console.log, console.info, console.warn.
// 2. Use prompt to take user’s name → alert a welcome message.
// 3. Log typeof of user’s input.
// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what
// happens.

// let a = prompt("enter your name");

// // console.log(`${a+5}`);


// Working with Strings
// 1. let msg = “I love Sheryians”;

// Js assignment 27-oct-2025 2

// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},
// welcome to JS!)
// 6. Check if msg.includes(“love”)

// let a = "I love Sheryians";

// console.log(a);

// console.log(a.slice(2,6));

// console.log(a.split(""));

// console.log(a.replace("love","fuck"));

// console.log(a.includes("love"));

// let name = "Harsh"

// console.log(`heyyyyy ${name}`);


// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)
// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// let a= 10;
// let b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

// let x= 5;
// x%=3;
// console.log(x)
// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count = 5;
// console.log(count);
// count++;
// console.log(count);
// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.
// e. Check if 10 is greater than 5, less than 20, and equal to 10.
// f. Try logical AND and OR:

// console.log(10 > 5 || 10 >20 || 10 === 10);
// true && false
// true || false
// !(true)
// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)
// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.

// console.log(5 & 1)
// Write result and your observation (no deep explanation needed now).

// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”
// Else → log “Minor”.

//  let a = prompt("enter your grade ");

// console.log( (a > 18)?"Adult":"Minor");
// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade
// // Else if marks >= 50 → “C grade”
// // Else → “Fail”
// if( a >=90){
//     console.log("Grade A");
// }
// else if ( a >=75)
// {
//     console.log("B grade");
// }
// else if ( a>=50)
// {
//     console.log("C Grade");
// }
// else{
//     console.log("Fail");
// }

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Banswara";
// if( city == "Bhopal")
// {
//     console.log("MP");
// }
// else if (city == "Delhi")
// {
//     console.log("Capital");
// }
// else{
//     console.log("Unknow city");
// }
// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.
// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// Assignment - 29 Oct 2

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.
// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

// let a = Number(prompt("NUmber batao ???"));

// for(let i=1;i<11;i++)
// {
//     console.log(`${a} X  ${i} = ${a*i}`); 
// }


// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
let count =0 ;
for(let i = 1;i<16;i++)
{
    if(i>8)
    {
        count++;
    }
}
console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let pass = prompt("Enter password");

if(pass == "xyz")
{
    console.log("Access");
}

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let nooftry = 1;
let password =prompt("enter passwrod");
while(nooftry !=3)
{
    if(password == "xyz")
    {
        console.log("Correct");
    }
    else
    {
        password =prompt("enter passwrod");
        nooftry++;

    }

    console.log("Account locked");
}

// // 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// // Loop until "stop" is typed. Count "yes".
// let word;
// let c = 0;
// while(true)
// {
//     word=prompt("enter word");
//     if(word == "Stop")
//     {
//         break;
//     }
//     else{
//         console.log("Yes");
//     }
// }

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for(let i = 1 ;i<51 ;i++)
{
    if(i%7==0)
    {
        console.log(i);
    }
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
let sum =0;
for(let i=1 ;i<=30;i++)
{
    if(i%2!=0)
    {
        sum+=i;
    }
}
console.log(`sum is ${sum}`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let enter = prompt("enter no");

while(true)
{
    if( enter % 2 != 0)
    {
        enter = prompt("enter no");
    }
    else{
        console.log("Stop");
        break;
    }
}

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
let x = +prompt("enter starrt numver");
let y = +prompt("enter end number ");

for(let i = x ; i<=y ;i++)
{
    console.log(i);
}

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
let counting = 0;
for(let i =1 ;i<=20 ;i++)
{
    if (i % 2 !=0 )
    {
        console.log(i);
        counting++;
    }

    if(counting===3)
    {
        break;
    }
    
}

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
let findpos=0;
let vars ;
let i =1;
while(i!=6)
{
 vars=+prompt("enter number");
 if(vars > 0)
 {
    findpos++;
 }
 i++;

}

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let atm;
let amount=1000;
let withdrwal=1;
while(withdrwal!=4)
{
    atm = +prompt("enter amouht you want to withdrwal");
    if(atm<=amount)
    {
        
    amount-=atm;
    

    }
    else{
        console.log("Insufficient balance");
        break;
    }

    withdrwal++;
}