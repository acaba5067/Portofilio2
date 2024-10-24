import React from 'react'
import './Skills.css'
import UIDesign from '../../assests/ui-design.png'
import webDesign from '../../assests/website-design.png'
import AppDesgin from '../../assests/app-design.png'

const Skills = () => {
  return (
      <section id="skills">
         <span className="skilltitle">What I do</span>
         <span className="skilldesc">I am a skilled and passionate web desginer with experience in creating UI for App and Websites</span>
           <div className="skillbars">
              <div className="skillbar">
                <img src={UIDesign} className='skillbarimg' alt="" />
                <div className="skillbartext">
                    <h2>UI/UX Desgin</h2>
                    <p> This is ad emo text, you can write your own content here</p>
                </div>
              </div>

              <div className="skillbar">
                <img src={webDesign} className='skillbarimg' alt="" />
                <div className="skillbartext">
                    <h2>Website Desgin</h2>
                    <p> This demo text can be changed while making the production ready website</p>
                </div>
              </div>


              <div className="skillbar">
                <img src={AppDesgin} className='skillbarimg' alt="" />
                <div className="skillbartext">
                    <h2>App Desgin</h2>
                    <p>you can write text related to mobile app development</p>
                </div>
              </div>
           </div>
      </section>
  )
}

export default Skills