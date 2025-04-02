import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg_icon.webp'
import location_icon from '../../assets/location_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import white_arrow from '../../assets/white_arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4c16d664-a88d-4107-a014-71631f8a8d96");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Fell free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional serviice to out university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@muit.com </li>
                <li> <img src={phone_icon} alt="" />+91 000-000-0000</li>
                <li> <img src={location_icon} alt="" />Sector 110, Noida , PO- Maharishi Nagar, Distt. Gautam Budh Nagar, Uttar Pradesh 201304, India </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter youe mobile number' required />
                <label htmlFor="">Write your messages here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
