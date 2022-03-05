import React from 'react'
import {useSelector } from 'react-redux'

import "./Styles/UnitDetailsPage.scss"

export default function UnitDetailsPage() {

    const unitForDetail = useSelector(state => state.unitForDetails)
  
    return (
        <div>
            <h2 style = {{textAlign :"center"}}>UNIT DETAIL PAGE</h2>
            <table >
                {unitForDetail &&
                <tbody>
                    <tr> 
                        <td>
                        ID: {unitForDetail.id}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Name: {unitForDetail.name}  
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Description: {unitForDetail.description}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Min. Required Age: {unitForDetail.age}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Wood Cost: {unitForDetail.cost ? unitForDetail.cost.Wood : ""}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Food Cost: {unitForDetail.cost ? unitForDetail.cost.Food : ""}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Gold Cost: {unitForDetail.cost ? unitForDetail.cost.Gold : ""}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Build Time: {unitForDetail.build_time}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Reload Time: {unitForDetail.reload_time}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Hit Points: {unitForDetail.hit_points}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Attack: {unitForDetail.attack}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Accuracy: {unitForDetail.accuracy ? unitForDetail.accuracy : ""}
                        </td>
                    </tr>
                </tbody>}
            </table> 
        </div>
        
  )
}
