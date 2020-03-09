import React, { Component } from 'react'

class FormHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
             emailid:'  ',
             Comments:'',
             skill:''
        }
        this.changeemail = this.changeemail.bind(this);
    }
    changeemail(event){
        this.setState({emailid:event.target.value});
    }
    handleusername=(event)=>{
        this.setState({username:event.target.value});
    }
    handlecomments=(event)=>{
        this.setState({Comments:event.target.value})
    }
    skillselected=(event)=>{
        this.setState({
            skill:event.target.value
        })
        console.log(event);
    }
    handlesubmit=(event)=>{
        console.log(this.state);

    }
    render() {
        return (
            <form noValidate>
                <h1>{this.state.emailid}</h1>
        <h1>{this.state.Comments}</h1>
                <input type='text' value={this.state.emailid} onChange={this.changeemail} ></input>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleusername} ></input>
                <textarea  value={this.state.Comments} onChange={this.handlecomments} ></textarea>
                <select value={this.state.skill} onChange={this.skillselected}>
                <option value="React">React</option> 
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                </select>
                <button type={"button"} onClick={this.handlesubmit}>Submit</button>  
                </form>
        )
    }
}

export default FormHandler
