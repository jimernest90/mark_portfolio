import React from 'react';
import imgOne from '../img/imgOne.jpg';
import imgTwo from '../img/imgTwo.jpg';
import imgThree from '../img/imgThree.jpg';
import imgFour from '../img/imgFour.jpg';
import imgFive from '../img/imgFive.jpg';
import imgSix from '../img/imgSix.jpg';
import imgSeven from '../img/imgSeven.jpg';
import imgEight from '../img/imgEight.jpg';
import imgNine from '../img/imgNine.jpg';
import imgTen from '../img/imgTen.jpg';
import '../styles/designs.css'
import { NavLink } from 'react-router-dom'


class Designs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            designs: []
        }
    }
    images =
    [
        {
            img: imgOne,
            id: 1
        },
        {
            img: imgTwo,
            id: 2
        },
        {
            img: imgThree,
            id: 3
        },
        {
            img: imgFour,
            id: 4
        },
        {
            img: imgFive,
            id: 5
        },
        {
            img: imgSix,
            id: 6
        },
        {
            img: imgSeven,
            id: 7
        },
        {
            img: imgEight,
            id: 8
        },
        {
            img: imgNine,
            id: 9
        },
        {
            img: imgTen,
            id: 10
        }
    ]
    componentDidMount(){
        let images = this.images
        this.setState({designs: images})
    }
    renderDesigns = () =>{
        return this.state.designs.map((image) =>(
            <div className='design_images' 
            id={image.id}>
            <img src={image.img} alt='design'/>
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
        <div className='design_img_parent'>{this.renderDesigns()}</div>
        </div>
          )

    }
}
export default Designs