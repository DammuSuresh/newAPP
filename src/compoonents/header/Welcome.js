import React,{Component} from 'react'
class Welcome extends Component{
    
    render(){
        const {name,establishment}=this.props;
    return <h3>Welcome to {name} Established on {establishment}</h3>
    }
}
export default Welcome