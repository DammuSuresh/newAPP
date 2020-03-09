import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class MethodasProps extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentname:'Parent'
    }
    this.greetParent = this.greetParent.bind(this);
}
greetParent(name){
    alert(`Hello ${this.state.parentname} from ${name}`);
}

    render() {
        return (
            <div>
                <ChildComponent GreetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default MethodasProps
