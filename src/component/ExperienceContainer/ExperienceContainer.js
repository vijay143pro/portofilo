import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'
const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer"id="exp">

       <h1> Experience</h1>
        <div className="experienceContainer__info">
        <Experience number="+10" title="Clients"/>
        <Experience number="60+" title="Learning" style={{backgroundColor:"#0dc2e2"}}/>
        <Experience number="2+" title="Projects"/>
        <Experience number="3+" title="Years of learning"/>
        </div>
        </Element>
    )
}

export default ExperienceContainer