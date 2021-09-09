import React from 'react'
import './TopContent.css';

import { Link } from 'react-scroll'

function TopContent() {
    return (
        <div className="topContent">
            <div className="TopContent__container">
            <h1>By Vijyaragavan S</h1>
            <p>Professional Front-end Developer</p>
            <a href="www.google.com">
                <button className="topContent__downloadBtn">Download</button>
            </a>
            <Link to="projects"smooth={true}duration={500}>
                <button className="topContent__workBtn">Mywork</button>
            </Link>
            </div>
        </div>
    )
}

export default TopContent
