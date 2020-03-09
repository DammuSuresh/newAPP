import React from 'react'

function ErrorCom({heroname}) {
    if(heroname==='Test'){
        throw new Error('Not a hero')

    }
        return (
        <div>
            <h1>{heroname}</h1>
        </div>
    )
}

export default ErrorCom
