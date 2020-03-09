import React from 'react'

function Person({props}) {
    return (
        <div>
           Hello {props.name} and USN is {props.USN}
        </div>
    )
}

export default Person
