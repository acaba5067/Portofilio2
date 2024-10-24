import React from 'react'
import { Link } from 'react-scroll'
import './intro.css'
import bg from '../../assests/image.png'
import btning from '../../assests/hireme.png'
const Intro = () => {
  return (
   <section id="intro">
          <div className="introcontent">
              <span className="hello">Hello,</span>
              <span className="introText">I am <span className="introName">Ibrahim</span><br />Software Engineer</span>
              <p className="intropara">I am a Software Engineer, I develop UI for App and Websites</p>
              <Link><button className="btn"><img src={btning} className='btnimg' alt="Hire me" />Hire Me</button></Link>
          </div>
             <img src={bg} alt="" className='bg' />
   </section>
  )
}

export default Intro;