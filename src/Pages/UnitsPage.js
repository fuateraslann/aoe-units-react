import React, { useEffect , useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'

import { getUnitRequest ,setFilteredUnit} from '../Redux/Units/unitAction'
import AgesFilterBar from '../Components/UnitsPageComponents/AgesFilter/AgesFilterBar'
import CostsFilterBar from '../Components/UnitsPageComponents/CostsFilter/CostsFilterBar'
import "./UnitsPage.scss"
export default function UnitsPage() {

  const dispatch = useDispatch()
  const filteredUnits = useSelector(state => state.filteredUnits)
  const units = useSelector(state => state.units)

  const [selectedAgesFilter , setSelectedAgesFilter] = useState("All")
  const [woodFilter , setWoodFilter] = useState(null)
  const [foodFilter , setFoodFilter] = useState(null)
  const [goldFilter , setGoldFilter] = useState(null)

  useEffect(()=>{
    dispatch(setFilteredUnit(units,selectedAgesFilter,woodFilter,foodFilter,goldFilter))
  },[ units ,selectedAgesFilter ,woodFilter, foodFilter,goldFilter])

  useEffect(()=>{
    dispatch(getUnitRequest())
  },[])
  
  function handleClick(){
    console.log("a")
  }

  return (
      <div>
        <h2 style = {{textAlign :"center"}}>UNITS PAGE</h2>
        <AgesFilterBar setSelectedAgesFilter = {(ages)=>setSelectedAgesFilter(ages)}/>
        <h2>Costs</h2>
        <CostsFilterBar contentText={"Wood"} setCostFilter = {(wood)=> setWoodFilter(wood)}/>
        <CostsFilterBar contentText={"Food"} setCostFilter = {(food)=> setFoodFilter(food)}/>
        <CostsFilterBar contentText={"Gold"} setCostFilter = {(gold)=> setGoldFilter(gold)}/>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>costs</th>
            </tr>
          {filteredUnits.length !==0 && filteredUnits.map(unit => (
              <tr key={unit.id} onClick = {handleClick}>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td>{unit.age}</td>
                <td>{unit.cost ? <span>{unit.cost.Wood ? <span>Wood: {unit.cost.Wood},<br/></span>:""}
                {unit.cost.Food ? <span>Food: {unit.cost.Food},<br/></span>:""}
                {unit.cost.Gold ? <span>Gold: {unit.cost.Gold}<br/></span>:""}
                </span> : ""} 
                </td>
              </tr>
          ))}
          </tbody>
        </table> 
      </div>
   
  )
}
