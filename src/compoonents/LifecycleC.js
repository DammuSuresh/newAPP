import React, { Component } from 'react'


 class LifecycleC extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              mesg:'From Lifecycle C Suresh'
         }
         console.log('Lifecycle C Constructor');
         componentDidMount()
     }
     static getDerivedStateFromProps(props,state){

        console.log('getDerivedStateFromProps  Life Cyccle C');
        return null;

     }
     componentDidMount(){
         console.log('Lifecycle C componentDidMount');
     }
  
     shouldComponentUpdate(){
        console.log('LifecycleC shouldcomponetUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleC getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log("Lifecycle C componentdidUpdate");
    }
    render() {
        console.log("Lifecycle C render method")
        return (
            <div>
               
                <h1>LifecycleC Render </h1>
                
            </div>
        )
    }
}

export default LifecycleC
