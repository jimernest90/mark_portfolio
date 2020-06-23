import React from 'react'


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