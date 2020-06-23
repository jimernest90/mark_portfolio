import React from 'react'
import '../styles/specialties.css'
import igPic from '../img/instagram.png'
import { NavLink } from 'react-router-dom'

const Specialties = () => {
    return (
        <div className='special_parent'>
            <div className='special_div'>
                <NavLink exact path to='/designs' className='designer'><h1>Designer</h1></NavLink>
                <div className='divider' />
                <div className='painting_div'>
                <NavLink exact path to='/paintings' className='painter'><h1>Painter</h1></NavLink>
                <a href='https://www.instagram.com/mosstea16/'><img src={igPic} alt='ig_image' className='ig_image'/></a>
                </div>
            </div>
            <div className='resume_specialties'>
                <NavLink exact path to='/resume'><h1>Resume</h1></NavLink>
            </div>
        </div>
    )
}
export default Specialties