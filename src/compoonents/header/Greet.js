import React from 'react'

const Greet= (props)=>{
    const {name,establishment}=props;
    return (<div>
<h1>Hello {name}---{establishment}</h1>
</div>)
}
 export default Greet