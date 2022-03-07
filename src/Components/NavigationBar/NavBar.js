import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  return (
    <ul test-attr="nav-bar-ul">
        <li><a test-attr="nav-bar-li-home" href="home">Home</a></li>
        <li><a test-attr="nav-bar-li-units" href="units">Units</a></li>
    </ul>
  )
}
