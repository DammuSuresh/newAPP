import React, { Component } from 'react'
//Focusing input elememts using refs 3 ways are avalaible
 class Refsdemo extends Component {
     constructor(props) {
         super(props)
     
         this.inputReference = React.createRef();
         this.callbackRef = null;
         this.setCBRef = element=>{
             this.callbackRef=element
         }
     }
     componentDidMount(){
         if(this.callbackRef){
             this.callbackRef.focus()
         }
        // console.log(this.inputReference);
        // this.inputReference.current.focus();// First way
     }
     clickHandler=()=>{
         alert(this.inputReference.current.value);
     }
    render() {
        return (
            <div>
                <input type="text"  ref={this.inputReference}/>
                <input type="text"  ref={this.setCBRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refsdemo
