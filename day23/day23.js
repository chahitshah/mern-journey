
// // # Day 60 — Exercises

// // ---

// // ## Exercise 1 — Very Easy (Warming up)

// // **Task (Hindi):** Ek function banao `afterDelay`

// // **Requirements:**
// // - Ye function do cheezein lega:
// //   1. `time` (milliseconds)
// //   2. `callback` function
// // - Given `time` ke baad `callback` call kare
// // - Callback ke andar `"Callback executed"` print hona chahiye

// // **Use case:**
// // > “2 second baad ek kaam karna hai”

// // **Goal:**
// // - Samajhna ki callback delay ke baad kaise execute hota hai
// // - Ye `setTimeout` + callback connection hai

// // ---

//  function afterdelay(Time,cb){
//      setTimeout(function(){
//          console.log("Callback executed")
//          cb();
//      },Time)
//  };

//  afterdelay(2000,function(){
//      console.log("Done")
//  });

// // ## Exercise 2 — Intermediate (Data flow)

// // **Task (Hindi):** Ek function banao `getUser`

// // **Requirements:**
// // - `getUser` `username` lega
// // - 1 second ke baad `callback` ko ek object de:
// //   - `id`
// //   - `username`

// // **Then:**
// // - Callback ke andar ek aur function call karo `getUserPosts`

// // **`getUserPosts` requirements:**
// // - `userId` lega
// // - 1 second ke baad `callback` ko `posts` ka array de

// // **Final output:**
// // - User ka `username` print ho
// // - Fir uske `posts` print ho

// // **Goal:**
// // - Samajhna ki ek async ka result next async ko kaise milta hai
// // - Callback chaining practice

// // ---
// function getuser(username,cb){
//     setTimeout(() => {
//         cb({id:1,username:username});
//     }, 1000);
// };

// function getuserposts(userId,cb){
//     setTimeout(() => {
//         cb(["post1","post2","post3"]);
//     }, 1000);
// };

// getuser("john",function(user){
//     console.log("Username:",user.username);
//     getuserposts(user.id,function(posts){
//         console.log("Posts:",posts);
//     });
// })

// // ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// // **Task (Hindi):** Teen functions banao:

// // 1. `loginUser`
// //    - 1 second baad callback ko `user` object de
// // 2. `fetchPermissions`
// //    - `userId` lega
// //    - 1 second baad callback ko `permissions` array de
// // 3. `loadDashboard`
// //    - `permissions` lega
// //    - 1 second baad callback ko `"Dashboard loaded"` bole
// function loginuser(username,cb)
// {
//     setTimeout(function(){
//         cb({username:username});
//     },1000)
// };

// function fetchpermissions(userid,cb){
//     setTimeout(function(){
//         cb(["read","write","delete"]);
//     },1000)
// };

// function loaddashboard(permissions,cb){
//     setTimeout(function(){
//         cb("Dashboard loaded");
//     },1000)
// };

// loginuser("john",function(data){
//     console.log("user:",data.username);
//     fetchpermissions(data.username,function(perms){
//         console.log("permissions:",perms);
//         loaddashboard(perms,function(msg){
//             console.log(msg);
//         })
//     })
// })
// // **Flow:**
// // - Pehle `loginUser`
// // - Uske andar `fetchPermissions`
// // - Uske andar `loadDashboard`
// // - Final output console mein print ho

// // **Goal:**
// // - Callback nesting ko feel karna
// // - Yehi structure baad mein callback hell banta hai

// // ---

// // ### Notes
// // - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.
// // Displaying Day 60 Question Sheet.md.

// function greetUser(name,cb){
//     setTimeout(function(){
//         cb("hello,"+name);
//     },1000)
// }

// greetUser("john",function(data){
//     console.log(data);
//     console.log("Callback executed");
// })

// function calculate(a,b,cb){
//     let result=cb(a,b);
//     return result;
// }
// function add(x,y){
//     return x+y;
// }
// function multiply(x,y){
//     return x*y;
// }   

// console.log(calculate(5,3,add));
// console.log(calculate(5,3,multiply));

// function fetchData(cb)
// {
//     setTimeout(function(){
//         console.log("data loaded");
//         cb();
//     },2000)
// }

// fetchData(function(data){
//     console.log(data);
// })

// function processUser(name,cb){
//     console.log(name);
//     setTimeout(function(){
//         cb(name.toUpperCase());
//     },1000)
// }

// processUser("john",function(data){
//     console.log(data);
// })

// function getuserdata(userID,cb){
//     setTimeout(function(){
//         cb({id:userID,name:"john"});
//     },2000)
// }

// getuserdata(1,function(data){
//     console.log(data);
// })

// function LoginUser(username,cb){
//     setTimeout(() => {
//         cb({username})
//     }, 1000);
// }

// function getPosts(user,cb){
//     setTimeout(function(){
//         cb(['post1','post2'])
//     },1000)
// }

// LoginUser("john",function(data){
//     console.log("User :"+data.username);
//     getPosts(data,function(posts){
//         console.log("post :",posts);
//     })
// })

// function divideNumbers(a, b, cb) {
//     if (b === 0) {
//         cb("Error: Cannot divide by zero", null);
//     } else {
//         cb(null, a / b);
//     }
// }

// divideNumbers(10, 0, function (error, result) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });

// divideNumbers(10, 2, function (error, result) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });

// function getUset(cb){
//     let result=Math.random() > 0.5; // Simulating success or failure randomly
//     setTimeout(function(){
//         if(result){
//             cb(null,{id:1,name:"john"});
//         }
//         else{
//              cb("Error fetching user", null); 
//         }
//     },1000)
// }

// function getposts(user,cb){
//     let result=true;
//     setTimeout(function(){
//         if(result){
//             cb(null,["post 1", "post 2"]);
//         }
//         else{
//              cb("Error fetching user", null);
//         }
//     },1000)
// }

// getUset(function(error,result){
//     if(error)
// //     {
//         console.log(error);
//     }
//     else{
//         console.log("User :",result.name);
//     getposts(result,function(error,posts){
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log("posts:",posts);
//         }
//     })
//     }
// })

// function getUser(userId,cb){
//     let result=Math.random()>0.5;
//     setTimeout(function(){
//         if(result){
//             cb(null,{id:userId,name:"John"});
//         }
//         else{
//             cb("User not Found!!!",null);
//         }
//     },1000)
// }

// function getPosts(user,cb){
//     let result=Math.random()>0.5;
//     setTimeout(function(){
//         if(result){
//             cb(null,["post 1","post 2"]);
//         }
//         else{
//             cb("Posts not found!!!",null)
//         }
//     },1000)
// }

// function getComments(post,cb)

// {
//     let result=Math.random()>0.5;
//     setTimeout(function(){
//         if(result){
//             cb(null,["comment 1","comment 2"]);
//         }
//         else{
//             cb("comments not found!!!",null)
//         }
//     },1000)
// }

// function getLikes(comment,cb)
// {
//     let result=Math.random()>0.5;
//     setTimeout(function(){
//         if(result){
//             cb(null,10);
//         }
//         else{
//             cb("Likes not found!!!",null)
//         }
//     },1000)
// }

// getUser(1,function(error,user){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("User:",user.name);
//         getPosts(user,function(error,posts){
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log("Posts:",posts);
//                 getComments(posts,function(error,comments){
//                     if(error){
//                         console.log(error);
//                     }
//                     else{
//                         console.log("Comments:",comments);
//                         getLikes(comments,function(error,likes){
//                             if(error){
//                                 console.log(error);
//                             }
//                             else{
//                                 console.log("Likes:",likes)
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })