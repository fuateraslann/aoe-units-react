import React from 'react'

import data from "../Assets/Datas/age-of-empires-units.json"
import AgesFilterBar from '../Components/NavBar/UnitsPageComponents/AgesFilter/AgesFilterBar'

export default function UnitsPage() {
   console.log(data.units.filter(element => element.id == 1))
  return (
      <div>
        <AgesFilterBar/>
        <table>
            <tbody>
                <tr>
                <td><a href={"unit-details/" +data.units[0].name}>Blah Blah</a></td>
                <td><a href="#">1234567</a></td>
                <td><a href="#">more text</a></td>
                </tr>
            </tbody>
        </table>
      </div>
   
  )
}
