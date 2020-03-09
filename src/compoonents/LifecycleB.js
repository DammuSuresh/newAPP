import React, { Component } from 'react'
import LifecycleC from './LifecycleC'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              mesg:'From Lifecycle B Suresh'
         }
         console.log('Lifecycle B Constructor');
     }
     static getDerivedStateFromProps(props,state){

        console.log('getDerivedStateFromProps  Life Cyccle B');
        return null;

     }
     componentDidMount(){
         console.log('Lifecycle B componentDidMount');
     }
     shouldComponentUpdate(){
         console.log('LifecycleB shouldcomponetUpdate');
         return true;
     }
     getSnapshotBeforeUpdate(){
         console.log('LifecycleB getSnapshotBeforeUpdate');
         return null;
     }
     componentDidUpdate(){
         console.log("Lifecycle B componentdidUpdate");
     }
    render() {
        console.log("Lifecycle B render method")
        return (
            <div>
               
                <h1>LifecycleB Render </h1>
                <LifecycleC></LifecycleC>
                
            </div>
        )
    }
}

export default LifecycleB
