import React from "react"
import './header.css'
 function showSignform(){
console.log('Test');
}
function header(){
    return <header className="App-header ">
                  <div >
                  <a onClick={showSignform}>Sign-In</a>  
                  <a >Sign-UP</a>
                  </div>
        
                </header>
           
}
export default header
