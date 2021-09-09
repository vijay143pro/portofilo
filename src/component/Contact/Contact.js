import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Instagram,Facebook, Email, } from '@material-ui/icons'
import './Contact.css'
const Contact = () => {
    return (
        <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div class="contact__container">
        <a href="https://www.google.com/vijayapushpa62@gmail.com">
        Email :<span>vijaypushpa62@gmail.com</span>
        </a>
        <a href="https://github.com/vijay143pro">
        Github User :<span>@vijay143pro</span>
        </a>
        <div className="contact__icons">
        <a href="https://www.instagram.com/invites/contact/?i=1aau2iz0v8k6o&utm_content=5wru5og">
        <IconButton>
        <Instagram/>
        </IconButton>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100038859501947">
        <IconButton>
        <Facebook/>
        </IconButton>
        </a>
        <a href="google.com">
        <IconButton>
        <Email/>
        </IconButton>
        </a>
        </div>
        </div>
        </Element>
    )
}

export default Contact
