import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../assets/skills.jpg'
import './SkillContainer.css'
import { LinearProgress } from '@material-ui/core'


const SkillContainer = () => {
    return (
        <Element className="skillContainer" id="skills">
        <div className="skillContainer__img">
        <img src={skillimg}alt=""className="logo"/>
        </div>
        <div className="skillContainer__text">
        <h2>Skillset</h2>
        <div className="skillContainer__skillset">
        <h5>Node</h5>
            <div className="skillContainer__slider skillContainer___slider1">
            <LinearProgress variant="determinate" value={45}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
        <h5>React</h5>
            <div className="skillContainer__slider skillContainer___slider1">
            <LinearProgress variant="determinate" value={55}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
        <h5>Html</h5>
            <div className="skillContainer__slider skillContainer___slider1">
            <LinearProgress variant="determinate" value={90}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
        <h5>Css</h5>
            <div className="skillContainer__slider skillContainer___slider1">
            <LinearProgress variant="determinate" value={70}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
        <h5>JavaScript</h5>
            <div className="skillContainer__slider skillContainer___slider1">
            <LinearProgress variant="determinate" value={50}/>
            </div>
        </div>
        </div>
        </Element>
    )
}

export default SkillContainer
//npm install @material-ui/core @material-ui/icons