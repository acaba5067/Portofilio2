import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assests/logo.png";
import contact from "../../assests/contact.png"
import {Link} from 'react-scroll';
import menu from '../../assests/menu.png'
const Navbar = () => {
  const [showMenu,setShowmenu]=useState(false);
  return(
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
          <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuItem item3'>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuItem'>Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt="" className='desktopMenuBtnImg'/>Contact Me</button>


         <img src={menu} alt="menu" className='mobmenu' onClick={()=>setShowmenu(!showMenu)} />
        <div className="navmenu" style={{display:showMenu? 'flex':'none'}}>
          <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onClick={()=>setShowmenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='listItem'onClick={()=>setShowmenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='listItem'onClick={()=>setShowmenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className='listItem'onClick={()=>setShowmenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='listItem'onClick={()=>setShowmenu(false)}>contact</Link>
        </div>

    </nav>
  )
}

export default Navbar