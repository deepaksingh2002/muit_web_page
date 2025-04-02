import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program_1.webp';
import program_2 from '../../assets/program_2.webp';
import program_3 from '../../assets/program_3.webp';
import program_icon_2 from '../../assets/program_icon_2.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt="" />
            <div className='caprion'>
                <img src={program_icon_2} alt="" />
                <p> Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
            <div className='caprion'>
                <img src={program_icon_2} alt="" />
                <p> Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
            <div className='caprion'>
                <img src={program_icon_2} alt="" />
                <p> Post Graduation </p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
