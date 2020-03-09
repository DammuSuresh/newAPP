import React,{Component} from 'react'
class Message extends Component{
    constructor(){
        super();
        this.state={
            mesg:'Suresh'
        }
    }
    changemesg(){
       this.setState({mesg:"ramesh" });
    }
    popup(){
        alert("Test excuted");
    }
    render(){
    return <div>
                <h3>Welcome {this.state.mesg}</h3>
                {/* <button onClick={()=>this.changemesg()}>Change Message</button> */}

                <button onClick={()=>this.popup()}>Button Click</button>
            </div>
    }
}
export default Message