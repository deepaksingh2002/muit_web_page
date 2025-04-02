import React from 'react';
import './About.css';
import about_img from '../../assets/about_img.webp'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play_icon' onClick={() => {setPlayState(true)}} />

        </div>
        <div className='about-right'>
            <h3>About UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
            <b>Empowering Minds, Enriching Futures</b><br />
              At Maharishi University of Information Technology (MUIT), we believe in shaping visionary leaders who will drive innovation, foster change, and make a meaningful impact on society. Our commitment to holistic education, cutting-edge research, and ethical values ensures that students are equipped with the knowledge and skills necessary to excel in the dynamic world of technology and beyond.</p>
            
            <p>
            <b>A Transformative Learning Experience</b> <br />
              We go beyond traditional learning methodologies to offer an educational experience that is deeply transformative. Our curriculum is designed to blend theoretical knowledge with practical applications, ensuring that students develop critical thinking, problem-solving abilities, and a spirit of innovation.</p>
            <p>
            <b>Shaping Leaders for a Better Tomorrow</b><br />
              At MUIT, we do not just educate students; we empower them to become change-makers. Our alumni are making significant contributions in various fields, from technology and business to social impact and governance. With a strong foundation in knowledge, skills, and values, our graduates emerge as confident professionals ready to lead and transform the future.</p>
        </div>
      
    </div>
  )
}

export default About
