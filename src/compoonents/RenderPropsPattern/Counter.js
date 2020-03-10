import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Count:0
         }
     }
     increseCount=(prevSta)=>{
         return {
            Count:prevSta.Count+1
         }
     }
     
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Counter
