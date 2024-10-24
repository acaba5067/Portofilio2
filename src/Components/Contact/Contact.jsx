import React, { useRef } from 'react'
import './Contact.css'
import walmart from '../../assests/walmart.png';
import Adobe from '../../assests/adobe.png';
import microsoft from '../../assests/microsoft.png';
import facebook from '../../assests/facebook.png';
import facebookicon from '../../assests/facebook-icon.png';
import twittericon from '../../assests/twitter.png';
import youtubeicon from '../../assests/youtube.png';
import Instagramicon from '../../assests/instagram.png';
import emailjs from "@emailjs/browser"
const Contact = () => {
  const form =useRef(null)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1lptml2', 'template_l99ayff', form.current, {
        publicKey: '2FJC2Fjn_pbZhMEeM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("email send");
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
          <div id="clients">
                <h1 className='contactpagetitle'>My Clients</h1> 
                <p className="clientsdesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={walmart}alt="" className="clientImg" />
                    <img src={Adobe} alt="" className="clientImg" />
                    <img src={microsoft} alt="" className="clientImg" />
                    <img src={facebook} alt="" className="clientImg" />
                </div>
          </div>

          <div id="contact">
            <h1 className='contactpagetitle'>Contact Me</h1>
            <span className="contactdesc">please fill out the form below to discuss any work opportunities.</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                 <input type="text" className="name" placeholder=' enter your name' name='your_name'/>
                 <input type="email" className='email' placeholder='enter your email' name='yoyr_email' />
                 <textarea className='msg' name="message" cols="30" rows="5" placeholder='your message'></textarea>
                 <button  type="submit" value="send" className="submitbtn" onSubmit={sendEmail}>Submit</button>
                 <div className="links">
                    <img src={facebookicon} alt="" className='link'/>
                    <img src={twittericon} alt="" className='link'/>
                    <img src={youtubeicon} alt="" className='link'/>
                    <img src={Instagramicon} alt="" className='link'/>
                 </div>
            </form>
          </div>
    </section>
  );
}

export default Contact