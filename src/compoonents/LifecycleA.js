import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              mesg:'From Lifecycle A Suresh'
         }
         this.changeState=this.changeState.bind(this);
         console.log('Lifecycle A Constructor');
     }
     static getDerivedStateFromProps(props,state){

        console.log('getDerivedStateFromProps  Life Cyccle A');
        return null;

     }
     componentDidMount(){
         console.log('Lifecycle A componentDidMount');
     }
     
     shouldComponentUpdate(){
        console.log('LifecycleA shouldcomponetUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log("Lifecycle A componentdidUpdate");
    }
    changeState(){
        this.setState({mesg:'State A Value changed'});
    }
    render() {
        console.log("Lifecycle A render method")
        return (
            <div>
                 
        <h1>{this.state.mesg}</h1>
                <button onClick={this.changeState}>Chnage State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
