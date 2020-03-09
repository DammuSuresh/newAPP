import React, { Component } from 'react'
import Regular from './RegularComp'
import Purecompo from './PureComp'
import MemoComp from './MemoComp'
import FocusInput from './FocusInput'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mesg:'Suresh',
             counter:0
        }
    }
    
    componentDidMount(){
        console.log("test");

        setInterval(()=>{this.setState({mesg:'Hello',counter:this.state.counter+1})},2000);
        
    }
    render() {
        console.log("***************Parent Componet ")
        return (
            <div>
                Parent Component 
                <FocusInput></FocusInput>
                {/* <MemoComp name={this.state.mesg}></MemoComp> */}
                {/* <Regular mesg="Hello" count={this.state.counter}></Regular> */}
                {/* <Purecompo mesg="Pure Component mesg" count={this.state.counter}></Purecompo> */}
            </div>
        )
    }
}

export default ParentComp
