import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'

import { getUnitRequest } from '../Redux/Units/unitAction'
import AgesFilterBar from '../Components/NavBar/UnitsPageComponents/AgesFilter/AgesFilterBar'
import CostsFilterBar from '../Components/NavBar/UnitsPageComponents/CostsFilter/CostsFilterBar'
export default function UnitsPage() {

  const dispatch = useDispatch()
  const units = useSelector(state => state.units)
  useEffect(()=>{
    dispatch(getUnitRequest())
  },[])
    
{/* <table>
          <tbody>
              <tr>
              <td><a >Blah Blah</a></td>
              <td><a href="#">1234567</a></td>
              <td><a href="#">more text</a></td>
              </tr>
          </tbody>
      </table> */}
  return (
      <div>
        <h2 style = {{textAlign :"center"}}>UNITS PAGE</h2>
        <AgesFilterBar/>
        <h2>Costs</h2>
        <CostsFilterBar contentText={"Wood"}/>
        <CostsFilterBar contentText={"Food"}/>
        <CostsFilterBar contentText={"Gold"}/>
      </div>
   
  )
}
