import React, { Component } from 'react'
import Person from './Person'

   function List() {
    let array=[
          {id:1,name:'Suresh',USN:'1AW11MCA'},
          {id:2,name:'aa',USN:'sassa'},
          {id:3,name:'bbb',USN:'ass'},
          {id:4,name:'cc',USN:'asas'},
          {id:5,name:'dd',USN:'asas'},
          {id:6,name:'fff',USN:'a'},
      ];
      const plist=array.map((obj,index)=><h1 key={index}>{index}<Person  props={obj}></Person></h1>)
    
        return (
            <div>
              {plist }
            </div>
        )
    
}

export default List
