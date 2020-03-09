import React, { Component } from 'react'
 class Classclick extends Component {
     clickhandlerr(){
        console.log('click handler from clss')
    }
    render() {
       
        return (
            <div>
                <h1>click handler from class component</h1>
                <button onClick={this.clickhandlerr}>From class Coponent</button>
            </div>
        )
    }
}

export default Classclick
