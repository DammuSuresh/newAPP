import React, { Component } from 'react'

import UpdatedComponent from './HOCwithCounter'

 class Hover extends Component {
   
    
    render() {
        const {Count,incrementCount,name}=this.props;
        return (
            <div>
                <h3 onMouseOver={incrementCount}>{name}&nbsp;On hover incresing count{Count}</h3>
            </div>
        )
    }
}

export default UpdatedComponent(Hover)
