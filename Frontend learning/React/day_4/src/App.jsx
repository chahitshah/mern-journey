import React from 'react'
import Cards from './components/Cards'
const App = () => {

  const users = [
  {
    id: 1,
    name: "David Joe",
    username: "@davidjoe",
    posts: 124,
    followers: "1.6K",
    following: 224,
    description: "Frontend developer who loves building clean UI and smooth user experiences."
  },
  {
    id: 2,
    name: "Emma Watson",
    username: "@emmaw",
    posts: 98,
    followers: "2.1K",
    following: 180,
    description: "Passionate about design, fashion, and storytelling through visuals."
  },
  {
    id: 3,
    name: "Chris Evans",
    username: "@chrisevans",
    posts: 210,
    followers: "3.4K",
    following: 310,
    description: "Fitness enthusiast and content creator sharing daily motivation."
  },
  {
    id: 4,
    name: "Sophia Lee",
    username: "@sophialee",
    posts: 76,
    followers: "980",
    following: 150,
    description: "UI/UX designer focused on minimal and user-friendly interfaces."
  },
  {
    id: 5,
    name: "Liam Smith",
    username: "@liamsmith",
    posts: 150,
    followers: "2.7K",
    following: 200,
    description: "Travel blogger exploring hidden places around the world."
  },
  {
    id: 6,
    name: "Olivia Brown",
    username: "@oliviab",
    posts: 65,
    followers: "1.2K",
    following: 140,
    description: "Food lover sharing recipes and restaurant reviews."
  },
  {
    id: 7,
    name: "Noah Wilson",
    username: "@noahw",
    posts: 180,
    followers: "3K",
    following: 260,
    description: "Tech geek writing about startups and new innovations."
  },
  {
    id: 8,
    name: "Ava Martinez",
    username: "@avam",
    posts: 92,
    followers: "1.8K",
    following: 175,
    description: "Photographer capturing moments and telling stories through images."
  },
  {
    id: 9,
    name: "James Anderson",
    username: "@jamesa",
    posts: 134,
    followers: "2.3K",
    following: 210,
    description: "Entrepreneur sharing business tips and productivity hacks."
  },
  {
    id: 10,
    name: "Mia Taylor",
    username: "@miat",
    posts: 58,
    followers: "890",
    following: 120,
    description: "Student learning coding and building cool projects every day."
  },
];
  return (
    
    <div className='bg-[#D6D9E0] min-h-screen pl-6 pt-6 flex flex-wrap gap-3'>
      {users.map(function(elem)
      {
        return <Cards key={elem.id} name={elem.name} username={elem.username} post={elem.posts} followers={elem.followers} following={elem.following} desc={elem.description}/>
      })}
    </div>
  )
}

export default App