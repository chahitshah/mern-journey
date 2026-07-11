import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
  {
    fullName: "Aarav Sharma",
    description: "Creative UI/UX designer focused on building clean and user-friendly digital experiences.",
    likes: "72.9K",
    posts: 120,
    views: "1.2M"
  },
  {
    fullName: "Riya Patel",
    description: "Frontend developer who loves crafting responsive and interactive web interfaces.",
    likes: "54.3K",
    posts: 98,
    views: "980K"
  },
  {
    fullName: "Kabir Singh",
    description: "Passionate graphic designer creating visually appealing and modern brand designs.",
    likes: "88.1K",
    posts: 150,
    views: "1.8M"
  },
  {
    fullName: "Ananya Verma",
    description: "Content creator sharing engaging and informative content across multiple platforms.",
    likes: "61.7K",
    posts: 110,
    views: "1.1M"
  },
  {
    fullName: "Dev Mehta",
    description: "Backend developer specializing in scalable systems and efficient API development.",
    likes: "45.2K",
    posts: 80,
    views: "870K"
  },
  {
    fullName: "Ishita Rao",
    description: "Fashion designer blending modern trends with unique and elegant styling concepts.",
    likes: "92.5K",
    posts: 200,
    views: "2.3M"
  },
  {
    fullName: "Arjun Nair",
    description: "Photographer capturing stories through lenses with a focus on natural aesthetics.",
    likes: "77.8K",
    posts: 140,
    views: "1.5M"
  },
  {
    fullName: "Sneha Kapoor",
    description: "Digital marketer helping brands grow through strategic campaigns and analytics.",
    likes: "50.6K",
    posts: 95,
    views: "920K"
  },
  {
    fullName: "Rahul Joshi",
    description: "Video editor creating cinematic and engaging content for digital audiences.",
    likes: "68.4K",
    posts: 130,
    views: "1.3M"
  },
  {
    fullName: "Neha Gupta",
    description: "Illustrator designing creative artworks with a mix of modern and minimal styles.",
    likes: "83.9K",
    posts: 160,
    views: "1.9M"
  }
];

  return (
    <div className='bg-[#F5F5F5] min-h-screen p-3 flex flex-wrap gap-10'>
      {users.map(function(elem)
      {
        return <Card fullname={elem.fullName} Desp={elem.description} likes={elem.likes} post={elem.posts} view={elem.views}/>
      })}
    </div>
  )
}

export default App