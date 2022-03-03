import React, {  } from 'react'

import "./AgesFilter.scss"
export default function AgesFilterBar() {

  function handleClick(event){
    // css action/////
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    event.currentTarget.className += " active";
    //// setFilterState

  }
  return (
      <div>
        <h2>Ages</h2>
        <div className="tab">
            <button className="tablinks" onClick={(e)=>handleClick(e,"All")}>All</button>
            <button className="tablinks" onClick={(e)=>handleClick(e,"Dark")}>Dark</button>
            <button className="tablinks" onClick={(e)=>handleClick(e,"Feudal")}>Feudal</button>
            <button className="tablinks" onClick={(e)=>handleClick(e,"Castle")}>Castle</button>
            <button className="tablinks" onClick={(e)=>handleClick(e,"Imperial")}>Imperial</button>
        </div>
      </div>
    

  )
}
