import React from 'react'
import aoeImage from "../Assets/Images/images.jpeg"

export default function HomePage() {
  
  return (
    <div> 
        <h2 style={{textAlign : 'center'}}>HOME PAGE</h2>
        <img src = {aoeImage} style ={{width : "400px" , height : "400px"}} />
    </div>
  )
}
