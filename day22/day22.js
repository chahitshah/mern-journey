
// // SECTION 1: Objects and OOPS Thinking (Foundation)
// // 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// // 	2.	Imagine you now have 5 users.
// // First, think how you would manage them without using a class.
// // Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// // 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// // The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// // ⸻
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     loogedin(){
//         console.log("user logged imn");
//     }
// }

// let user=new User();
// user.loogedin();

// let user1=new User("abc","abc@example.com");
// let user2=new User("abc","abc@example.com");
// let user3=new User("abc","abc@example.com");
// let user4=new User("abc","abc@example.com");
// let user5=new User("abc","abc@example.com");

// // SECTION 2: Classes and Objects
// // 	4.	Create a Car class with the following:
// // brand
// // speed
// // a drive method that prints the car brand and speed
// // 	5.	Create two different car objects from the same class and verify that their data is different.
// // 	6.	Answer this in your own words:
// // If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// //if class is not exist then we create a object and for mulitple user we create a indivudal object and if user base is learge thhen its diffuclt to fund erorr and its bad prastice and not optimzed
// // ⸻
// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }

//     drive(){
//         return `the car brand is ${this.brand} and speed is ${this.speed}`;
//     }
// }

// let car1=new Car("BMW",200);

// car1.drive();

// let car2=new Car("audi",300);

// car2.drive();
// // SECTION 3: Constructor and this keyword
// // 	7.	Create a Student class whose constructor accepts name and roll number.
// // Add a method introduce that prints both values.
// // 	8.	Inside the constructor, set values using this.
// // Then try removing this and notice what error occurs and why.
// // 	9.	Create an object with two methods:
// // One method using a normal function
// // One method using an arrow function

// // Inside both, print this and observe the difference.

// // The goal is to clearly understand how this works and when it changes.

// // ⸻
// class Student{
//     constructor(name,rollno){
//         this.name=name;
//         this.rollno=rollno;
//     }
//     introduce(){
//         return `my name is ${this.name} and roll number is ${this.rollno}`;
//     }
// }

// let std1=new Student("abc",123);
// std1.introduce();

// class Students{
//     Sayhi(){
//         console.log(this);
//     }

//     rollno=()=>{
//         console.log(this);
//     }

// }

// let student1=new Students();
// student1.Sayhi();
// student1.rollno();
// // SECTION 4: Constructor Functions and Prototypes
// // 	10.	Create a User constructor function (do not use class syntax).
// // 	11.	Add a login method in two ways:
// // First, inside the constructor
// // Then, move the method to the prototype
// // 	12.	Create two User objects and compare their login methods using equality.
// // Explain why the result is true or false.

// // The purpose here is to understand how prototypes help share behavior efficiently.

// // ⸻

// // SECTION 5: call, apply, bind
// // 	13.	Create a function that prints this.name.
// // 	14.	Create an object that contains a name property.

// // Use call to run the function using the object
// // Use apply to run the function using the object
// // Use bind to create a new function and then call it
// // 	15.	Borrow a method from one object and run it for another object using call.

// // The goal is to understand how this can be manually controlled.
// // Displaying Day 58 - Question Sheet 1.md.

// class Learn{
//     constructor(name){
//         this.name=name;
//     }
//     run(){
//         console.log(this.name);
//     }
// }
// let learn1=new Learn("abc");
// console.log(learn1.run());

//------------------------------------------------------------------------------------


// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.
//the proble mi face that i have to create a 10 object woht sane stryctrw but diffrent value whi if 10 we can crtae but later is more we add this is diffult time consuimng and not optimzed beciase evetitnh we create a new object its take time and not good beussit incrase the line of code and also diffult in readibility and one more not opotimed and also its not reusable 
// ⸻
let Laptop={
    brand:"HP",
    price:50000,
    start:function(){
        console.log("Laptop started");
    }
}

let increased={
    priceincrease:function(){
        this.price=this.price*1.1;
    }
}

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?
//the class is consider better option bevuase its reuable not lie the object whic is not reuable and also its bette rin redaibilty and itd also use share memeory of protype so we dint need to write same functi nagain and again and if we find or chanfe someting we just need to chanfe in that clas sonly not like in object chanfe the thing in object how may time we crrate and imprive efifcenry and less line of code in class
// ⸻
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }

    shoedetials(){
        return `the name is ${this.name} and salary is ${this.salary}`;
    }
}

let emp1=new Employee("abc",50000);

let emp2=new Employee("abd",500);
let emp3=new Employee("abe",10000);
for(let emp of [emp1,emp2,emp3]){
    console.log(emp.shoedetials());
}
// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.
//befuss ei do acc1.deposit ths thwy in seicnd it snot affected becusd we use commonit prottype whu is shar emeemory but its dpeend on our instance 

// ⸻

class Bankaccount{
    constructor(accountHoldername,blance){
        this.accountHoldername=accountHoldername;
        this.balance=blance;
    }

    deposit(amount){
        this.balance=this.balance+amount;
    }
}

let acc1=new Bankaccount("abc",500);
let acc2=new Bankaccount("abd",1000);

acc1.deposit(500);
console.log(acc1.balance);
console.log(acc2.balance);

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

let newobject={
    username:"abc",
    printname:function(){
        console.log(this.username);
    }
}
newobject.printname();

// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

// ⸻
let vehicle=function(type,wheels){
    this.type=type;
    this.wheels=wheels

    this.describe=function(){
        return `the type is ${this.type} and wheels is ${this.wheels}`;
    }
}

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.
//the call s solving problem her eis that we can cretae a functioin using this and in later if we want to add the name using this we can crrrate a obkect wih name and then use call ot put in that function 
// ⸻
let showbrand=function(){
    console.log(this.brand);
}

let obj1={
    brand:"HP"
}
let obj2={
    brand:"Dell"
}
showbrand.call(obj1);
showbrand.call(obj2);

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.
//the apply is didfnet from call beusse in this we cna enter a vlue in the form of array 
// ⸻
let introduce=function(city,role){
    console.log(`the name is ${this.name} and city is ${city} and role is ${role}`);
}

let obj={
    name:"abc",
    
}

introduce.apply(obj,["delhi","developer"]);

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
// Displaying Day 58 - Question Sheet 2.md.

let greet=function(){
    console.log(`hello ${this.name}`);
}

let objs={
    name:"abc"
}

let ans=greet.bind(objs);

ans();