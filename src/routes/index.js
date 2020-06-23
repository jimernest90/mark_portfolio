import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Specialties from '../screens/Specialties'
import Designs from '../screens/Designs'
import Resume from '../screens/Resume'
import Design from '../screens/Design'
import Paintings from '../screens/Paintings'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Specialties}/>
            <Route exact path='/designs' component={Designs}/>
            <Route exact 
            path='/designs/:id' 
            render={props => <Design {...props}/>}
            />
            <Route exact path='/resume' component={Resume}/>
            <Route exact path='/paintings' component={Paintings}/>
        </Switch>
    )
}
export default Routes