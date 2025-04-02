import React from 'react';
import './Hero.css';
import black_arrow from '../../assets/black-arrow.png';
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and expreiences needed to excel in the dynamic field of education</p>
        <button 
        onClick={()=>window
          .open("https://muitnoida.edu.in/about-the-university","_blank")
        }
        className='btn'>Explore more <img src={black_arrow} alt="" />
        </button>
      </div>
      
    </div>
  )
}

export default Hero
