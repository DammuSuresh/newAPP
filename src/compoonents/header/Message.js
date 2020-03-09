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
    render(){
        
    return <div>
                <h3>Welcome {this.state.mesg}</h3>
                <button onClick={()=>this.changemesg()}>Change Message</button>
            </div>
    }
}
export default Message