import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Section1 from './components/Advsection/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default App