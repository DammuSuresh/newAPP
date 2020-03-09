import React, { Component } from 'react'
import UpdatedComponent from './HOCwithCounter'

 class IncCounter extends Component {
     
     
    render() {
        const {Count,incrementCount} = this.props;
        return (
            
            <div>
                {this.props.name}
                <button onClick={incrementCount}>Button Clicked {Count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(IncCounter)
