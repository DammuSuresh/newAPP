import React, { Component } from 'react'

 class RegularComp extends Component {
    
    render() {
        console.log("Regular component")
        return (
            <div>
                This is regular component {this.props.mesg}---{this.props.count}
            </div>
        )
    }
}

export default RegularComp
