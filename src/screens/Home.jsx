import React from 'react'
import '../styles/home.css'
import { NavLink } from 'react-router-dom'
const Home = () =>{
    return(
        <div className='title_Name'><NavLink exact path to='/home'><div className='title_Text'><h1>Mark Basedow</h1><p>ENTER</p></div></NavLink></div>
    )
}
export default Home