import React, { Component } from 'react'

 class Counter2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Count:0
         }
     }
     
     incrementCount=()=>{
         this.setState((prevSate)=>{return {Count:prevSate.Count+1}})
     }
    render() {
        const {Count}=this.state;
        return (
            <div>
               <h1 onMouseOver={this.incrementCount}>hover me to Increment the Count {Count}</h1> 
            </div>
        )
    }
}

export default Counter2
