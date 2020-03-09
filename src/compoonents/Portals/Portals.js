import React from 'react'
import ReactDOM from 'react-dom'

function Portals() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portals Demo</h1>
        </div>
    ,document.getElementById('Portals-root'))
}

export default Portals
