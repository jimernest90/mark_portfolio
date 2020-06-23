import React from 'react'
import Axios from 'axios'


class Design extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            design: []
        }
    }
    componentDidMount(){
        // this.fetchDesign()
    }
    render(){
        return(
            <>{this.props.match.params.id}</>
        )
    }

}
export default Design