import React from 'react';
import paintingOne from '../img/paintingOne.jpg';
import paintingTwo from '../img/paintingTwo.jpg';
import paintingThree from '../img/paintingThree.jpg';
import paintingFour from '../img/paintingFour.jpg';
import paintingFive from '../img/paintingFive.jpg';
import paintingSix from '../img/paintingSix.jpg';
import paintingSeven from '../img/paintingSeven.jpg';
import paintingEight from '../img/paintingEight.jpg';
import paintingNine from '../img/paintingNine.jpg';
import paintingTen from '../img/paintingTen.jpg';
import '../styles/paintings.css'
import { NavLink } from 'react-router-dom'

class Paintings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paintings: []
        }
    }
    paintings =
    [
        {
            img: paintingOne,
            id: 1
        },
        {
            img: paintingTwo,
            id: 2
        },
        {
            img: paintingThree,
            id: 3
        },
        {
            img: paintingFour,
            id: 4
        },
        {
            img: paintingFive,
            id: 5
        },
        {
            img: paintingSix,
            id: 6
        },
        {
            img: paintingSeven,
            id: 7
        },
        {
            img: paintingEight,
            id: 8
        },
        {
            img: paintingNine,
            id: 9
        },
        {
            img: paintingTen,
            id: 10
        }
    ]
    componentDidMount(){
        let paintings = this.paintings
        this.setState({paintings: paintings})
    }
    renderPaintings = () =>{
        return this.state.paintings.map((painting) =>(
            <div className='painting_images' 
            id={painting.id}>
            <img src={painting.img} alt='painting'/>
            </div>
        ))
    }

    render() {
        return (   
        <div className='design_parent'>
            <div className='design_nav'>
            <NavLink exact path to='/home'><h1>HOME</h1></NavLink>
            <NavLink exact path to='/resume'><h1>RESUME</h1></NavLink>
            </div>
            <div className='nav_divider'/>
        <div className='painting_img_parent'>{this.renderPaintings()}</div>
        </div>
          )

    }
}
export default Paintings