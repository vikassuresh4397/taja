import React from 'react'
import image from "../Pictures/vikasprofpic.JPG"
const Home = () => {
  return (

          <section id="home">
        <h1 id="user-detail-name">John Doe</h1>
        <p id="user-detail-intro">Front-end Developer</p>
        <img src={image} alt="Professional" className="home-img" />
      </section>
    
  )
}

export default Home