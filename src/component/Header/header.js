import React from 'react'
import './Header.css'
import { Link } from 'react-scroll';
const Header=()=>{
    return(
        <div className="header">
        <div className="header__left">
            <h1>SV<span>R</span></h1>
        </div>
    <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
        <h4>
            About me
        </h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
        <h4>
        skills
        </h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
        <h4>
        projects
        </h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
        <h4>
        Experience
        </h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
        <h4>
        Contact
        </h4>
        </Link>
        <h4 className="header__rightButton">Join us</h4>
    </div>
        </div>
    )
}
export default Header;

// install react-scroll
//Google fonts