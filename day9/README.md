🖥️ MacBook Product Card UI – Hover Overlay Effect
📌 Project Overview

This project is a modern Product Card UI component built using HTML5 and CSS3.

It displays multiple MacBook product cards with a smooth hover animation that reveals product specifications using a sliding overlay effect.

This project focuses on strengthening frontend fundamentals like layout, positioning, and transitions.

🚀 Features

Responsive Flexbox layout

Multiple product cards

Smooth hover animation

Sliding bottom overlay

Gradient background for better text visibility

Rounded card design

Clean and modern UI

🛠️ Technologies Used

HTML5

CSS3

Flexbox

CSS Positioning

CSS Transitions

Linear Gradient

📂 Project Structure
project-folder/
│
├── index.html
└── day9.css
🧠 Concepts Practiced
1️⃣ Flexbox Layout

Used display: flex, gap, and flex-wrap to create a responsive card layout.

2️⃣ Positioning (Relative & Absolute)

The card uses position: relative and the overlay uses position: absolute to create a layered effect.

3️⃣ Hover Effect

The bottom overlay is initially hidden using:

bottom: -100px;

On hover, it moves into view:

bottom: 0;
4️⃣ Smooth Animation

Used:

transition: bottom 0.5s ease;

to create a smooth sliding animation.

5️⃣ Gradient Overlay

Used:

linear-gradient(transparent, rgba(0,0,0,0.8))

to improve readability of text on images.

🎯 How It Works

When the page loads → only the image is visible.

When hovering over a card → product specifications slide up.

The overlay displays:

Product Name

Chip Information

RAM

Storage

Display Details

📸 UI Behavior

✔ Clean layout
✔ Smooth animation
✔ Responsive wrapping
✔ Professional card structure

🔮 Future Improvements

Add image zoom effect

Add price section

Add "Buy Now" button

Make fully responsive for mobile

Convert into reusable component

Add JavaScript interactivity

🏁 Conclusion

This project demonstrates a strong understanding of:

CSS positioning

Hover interactions

Animation techniques

Modern UI card design patterns

It is a foundational frontend project that reflects practical UI implementation skills.