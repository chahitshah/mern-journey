
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

