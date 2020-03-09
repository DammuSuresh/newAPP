import React, { Component } from 'react'
class EventBinding extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          mesg:'Welcome to React'
     }
    //  /this.clickhandler=this.clickhandler.bind(this);
 }
//  clickhandler(){
//    this.setState({mesg:'Good bye'});
//    console.log(this)
//  }
clickhandler =()=>{
    this.setState({mesg:'Good bye111'});
}
 
    render() {
        return (
            <div>
    <h3>{this.state.mesg}</h3>
                {/* <button onClick={this.clickhandler.bind(this)}>Event bind</button> */}
                {/* <button onClick={()=>this.clickhandler()}>Event bind</button> */}
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
