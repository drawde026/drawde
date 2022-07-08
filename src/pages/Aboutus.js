import React from 'react'
import "../components/Aboutus.css"
import about from "../components/about.jpg"

function Home() {
  return (
    <div className='aboutus'>
      <div className='aboutTop'
       style={{backgroundImage: `url(${about})`}}></div>

    </div>
  )
}

export default Home
