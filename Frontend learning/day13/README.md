# Day 19 – JavaScript Basics Practice

Today I practiced some fundamental JavaScript concepts and browser interaction methods.

## Topics Covered

### 1. Console Methods

Learned how to use different console methods for debugging and information.

* `console.log()` – print normal messages
* `console.info()` – display informational messages
* `console.warn()` – show warnings in the console

Example:

```javascript
console.log("Hello World");
console.info("This is info message");
console.warn("This is a warning");
```

---

### 2. User Interaction

Used browser interaction methods to communicate with users.

* `prompt()` – take input from the user
* `alert()` – show popup messages

Example:

```javascript
let name = prompt("Enter your name");
alert(`Good Afternoon ${name}`);
```

---

### 3. typeof Operator

Learned how to check the type of a variable.

Example:

```javascript
let name = prompt("Enter your name");
console.log(typeof name);
```

Note: `prompt()` always returns a **string**.

---

### 4. String vs Number Addition

Observed how JavaScript behaves when adding numbers to strings.

Example:

```javascript
let age = prompt("Enter your age");
console.log(age + 5);
```

Output example:

```
Input: 20
Output: 205
```

This happens because the value from `prompt()` is treated as a **string**.

---

### 5. Type Conversion

Converted string input to a number using `Number()`.

Example:

```javascript
let age = Number(prompt("Enter your age"));
console.log(age + 5);
```

Output:

```
25
```

---

### 6. Primitive vs Reference Data Types

#### Primitive Types

Stored by **value**.

Examples:

* Number
* String
* Boolean
* Null
* Undefined
* BigInt
* Symbol

Example:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

---

#### Reference Types

Stored by **memory reference**.

Examples:

* Object
* Array
* Function

Example:

```javascript
let obj1 = {name: "Chahit"};
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
```

Both variables point to the **same object in memory**.

---

## Key Takeaways

* `prompt()` always returns a **string**
* Use `Number()` to convert user input to a number
* Primitive types copy **values**
* Reference types copy **memory addresses**
* Console methods help in debugging JavaScript code

---

## Next Learning Goal

* Stack vs Heap memory in JavaScript
* JavaScript operators
* Conditional statements
