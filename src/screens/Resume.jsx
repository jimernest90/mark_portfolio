import React from 'react'
import resume from '../img/Basedow_Resume.jpg'
import '../styles/resume.css'
import {NavLink} from 'react-router-dom'

const Resume = () => {
    return (
        <div className='design_parent'>
        <div className='design_nav'>
            <NavLink exact path to='/home'><h1>HOME</h1></NavLink>
            <NavLink exact path to='/designs'><h1>DESIGNS</h1></NavLink>
            <NavLink exact path to='/paintings'><h1>PAINTINGS</h1></NavLink>
            </div>
            <div className='nav_divider'/>
        <div className='resume'>
            <img src={resume} alt='resume' />
        </div>
        </div>
    )
}
export default Resume