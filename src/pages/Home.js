import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Home.css"
import alib from "../components/alib.jpg"

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${alib})`}}>
     <div className='headerContainer'>
      <h1>E Commerce</h1>
      <Link to="/ShopNow">
      <button>
        Order Now!
      </button>
      </Link>
    </div>
    </div>
  );
}

export default Home
