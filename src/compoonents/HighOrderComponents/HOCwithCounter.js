import React from 'react'

const UpdatedComponent=(OriginalComponent)=> {   
     class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 Count:0
            }
        }
        incrementCount=()=>{
            this.setState(prevState=>{
               return {Count: prevState.Count+1}
            });
        }
         
        render() {
            return (
               <OriginalComponent Count={this.state.Count} incrementCount={this.incrementCount} {...this.props}></OriginalComponent>
            )
        }
    }
    return NewComponent
    
}

export default UpdatedComponent
