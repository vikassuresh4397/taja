import "../components/About.css";
import React from 'react';
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/img/vikasprofpic-removebg-preview_clipdrop-relight.jpg";

const About = () => {
  // Array of images from the image folder
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
    // Add more images as needed
  ];

  // Current index of the displayed image
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Function to update the current image index every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about section">
      <div className="about-wrapper">
        <div className="top">
          <div className="left-side">
            <br></br>
            <h2>About Me 👨🏼‍💻👷🏻🖥️💻</h2>
            <p>I am Sonu Kumar, an aspiring Full-Stack Web Developer with excellent skills in administration, communication, and MERN Stack development. With 1200+ coding hours, I focus on details and have expertise in JavaScript, React, Node.js, Express.js, and MongoDB. Passionate and curious, I seek career growth in technology-driven companies to showcase my skills and expand my knowledge
</p>
            <h3>Education 🎓📚📔📕</h3>
            <p>Full Stack Web Development, Masai School
07/2022 – 08/2023
 | 
Banglore</p>
            <p>Masters & Bachelors in Civil Engineering (Construction Engineering & Management), 
Pillai HoC College of Engineering & Technology
2015 – 2023
 | 
Rasayani | Mumbai Univesity</p>
            
            <h3>Hobbies & Interests🤓🎨🖼️💰</h3>
            <p>Shadow Painting & UI and UX designing</p>
        
          
          </div>
          <div className="right-side">
            <img src={image6} alt="" />
          </div>
        </div>
        <br />
        <div className="bottom">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ display: index === currentImageIndex ? "block" : "none" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
