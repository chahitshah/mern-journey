const users = [
  {
    username: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Frontend Developer",
    description: "Passionate about building responsive and user-friendly web interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    username: "Priya Verma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designing intuitive and beautiful digital experiences.",
    tags: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
  },
  {
    username: "Rohan Mehta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Backend Developer",
    description: "Building scalable APIs and server-side logic.",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },
  {
    username: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description: "Turning data into actionable insights.",
    tags: ["Python", "SQL", "Pandas", "Data Visualization"]
  },
  {
    username: "Kunal Singh",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Mobile App Developer",
    description: "Creating high-performance mobile applications.",
    tags: ["Flutter", "React Native", "Android", "iOS"]
  }
];

var sum ='';
users.forEach(function(elem){
    sum+=`<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.username}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`

        
})

let main=document.querySelector("main");

main.innerHTML=sum;
