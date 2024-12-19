import React from 'react'
import './Footer.css'
import logo from "../../LOGO.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <>

    <footer className="footer"> 
      <div className="footer-top"> 
        <div className="footer-logo"> 
          <Link to={"/"} className="logo">
        <img src={logo} />
          </Link>
        </div>
      </div>


      <div className="footer-icons"> 
        <Link to={"/github"} className='icons-media'>
          <FontAwesomeIcon icon= { faGithub }/>
        </Link>

        <Link to={"/twitter"} className='icons-media'>
          <FontAwesomeIcon icon= { faXTwitter }/>
        </Link>

        <Link to={"/youtube"} className='icons-media'>
          <FontAwesomeIcon icon= { faYoutube }/>
        </Link>
          
      </div>

      <div className="footer-middle"> 
        <p> <FontAwesomeIcon icon={faCopyright} /> Kevin Murillo • Desarrollador Web </p> 

        <p> 
          Proyecto web alojado en
          <Link to="/proyecto" className='project'> Link </Link> </p>
      </div>
      
      <div className="footer-bottom"> 
        <ul className="footer-links"> 
          <li><a href="#legal">Legal</a></li> •
          <li><a href="#privacidad">Privacidad</a></li> •
          <li><a href="#cookies">Cookies</a></li> 
        </ul>
      </div> 
    </footer>
    
    </>
  )
}

export default Footer;
