import React, { Component } from 'react'

 class ClickCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Count:0
         }
     }
     incrementCount=()=>{
         this.setState(prevState=>{
            return {Count:prevState.Count+1}
         })
     }
     
    render() {
        const {Count}=this.state;
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {Count} times</button>
            </div>
        )
    }
}

export default ClickCounter
