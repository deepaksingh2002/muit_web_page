import React, { useRef } from 'react'
import './Tastimonial.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user_1.png';
import user_2 from '../../assets/user_2.png';
import user_3 from '../../assets/user_3.png';
import user_4 from '../../assets/user_4.png';

const Tastemonial = () => {
    
    const slider = useRef();
    let tx=0;
const slideForward = () => {
    if(tx > -50){
        tx -=25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () => {
    if(tx < 0){
        tx +=25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'  onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Deepak Singh</h3>
                                <span>Delhi, INDIA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at MUIT was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Princ Jha</h3>
                                <span>Delhi, INDIA</span>
                            </div>
                        </div>
                        <p>Choosing MUIT for technical studies was brilliant! Passionate faculty, hands-on labs, and industry projects gave me real skills. I felt totally prepared for my career thanks to their support. For the best technical education, this college is it!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Deepak kr Singh</h3>
                                <span>Bihar, INDIA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at MUIT was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className='user-info'>
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Deepak Kumar Singh</h3>
                                <span>Delhi, INDIA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at MUIT was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Tastemonial
