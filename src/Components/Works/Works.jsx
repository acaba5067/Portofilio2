import React from 'react'
import './Works.css'
import portfolio1 from '../../assests/portfolio-1.png'
import portfolio2 from '../../assests/portfolio-2.png'
import portfolio3 from '../../assests/portfolio-3.png'
import portfolio4 from '../../assests/portfolio-4.png'
import portfolio5 from '../../assests/portfolio-5.png'
import portfolio6 from '../../assests/portfolio-6.png'
const Works = () => {
  return (
    <section id='works'>
           <h2 className="workstitle">Portfolio</h2>
           <span className="workdesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am exicted to bring my skills and experience to help businesses achieve their goals and create a strong online presence</span>
           <div className="worksImg">
            <img src={portfolio1} alt="" className="workImg" />
            <img src={portfolio2} alt="" className="workImg" />
            <img src={portfolio3} alt="" className="workImg" />
            <img src={portfolio4}alt="" className="workImg" />
            <img src={portfolio5} alt="" className="workImg" />
            <img src={portfolio6} alt="" className="workImg" />
           </div>
           <button className='worksbtn'>See More</button>
    </section>
  )
}

export default Works;