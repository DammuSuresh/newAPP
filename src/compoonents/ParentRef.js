import React, { Component } from 'react'
import FrnewInput from './FrInput'
class NewParentRefForwaring extends Component
{
    render() {
        return (
             <div>Test
             <FrnewInput></FrnewInput>
                 <button>Focus Fr Input</button>
             </div>
        );
    }
}
export default NewParentRefForwaring
