import React,{useState} from 'react'
import { Element } from 'react-scroll'
import './ProjectContainer.css'
import images from '../ProjectImages/ProjectImages'

const ProjectContainer = () => {
    const [Img1]=useState(0);
    const [Img2]=useState(1);
    const [Img3]=useState(2);
    const [Img4]=useState(0);
    return (
        <Element className="projectContainer"id="projects">
        <h1>Projects</h1>
        <div className="innerProject">
        <img src={images[Img1].img}/>
        <img src={images[Img2].img}/>
        <img src={images[Img3].img}/>
        <img src={images[Img4].img}/>
        </div>
        </Element>
    )
}

export default ProjectContainer
