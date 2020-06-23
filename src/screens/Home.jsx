import React from 'react'
import '../styles/home.css'
import { NavLink } from 'react-router-dom'
const Home = () =>{
    return(
        <NavLink exact path to='/home'><div className='title_Name'><h1>Mark Basedow</h1></div></NavLink>
    )
}
export default Home