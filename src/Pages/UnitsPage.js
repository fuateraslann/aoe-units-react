import React, { useEffect , useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux'

import { getUnitRequest ,setFilteredUnit , setUnitForDetails} from '../Redux/Units/unitAction'
import AgesFilterBar from '../Components/UnitsPageComponents/AgesFilter/AgesFilterBar'
import CostsFilterBar from '../Components/UnitsPageComponents/CostsFilter/CostsFilterBar'
import "./Styles/UnitsPage.scss"
export default function UnitsPage() {

  const dispatch = useDispatch()
  const filteredUnits = useSelector(state => state.filteredUnits)
  const units = useSelector(state => state.units)

  const navigate = useNavigate()
  
  const [selectedAgesFilter , setSelectedAgesFilter] = useState("All")
  const [woodFilter , setWoodFilter] = useState(null)
  const [foodFilter , setFoodFilter] = useState(null)
  const [goldFilter , setGoldFilter] = useState(null)

  // listening filter states  
  useEffect(()=>{
    dispatch(setFilteredUnit(units,selectedAgesFilter,woodFilter,foodFilter,goldFilter))
  },[ units ,selectedAgesFilter ,woodFilter, foodFilter,goldFilter,dispatch])

  // at first render, get async data 
  useEffect(()=>{
    dispatch(getUnitRequest())
  },[dispatch])

  async function  handleTableRowClick(unit){
    dispatch(setUnitForDetails(unit))
    navigate("/unitDetail") 
  }

  return (
      <div>
        <h2 style = {{textAlign :"center"}}>UNITS PAGE</h2>
        <AgesFilterBar setSelectedAgesFilter = {(ages)=>setSelectedAgesFilter(ages)}/>
        <h2>Costs</h2>
        <CostsFilterBar contentText={"Wood"} setCostFilter = {(wood)=> setWoodFilter(wood)}/>
        <CostsFilterBar contentText={"Food"} setCostFilter = {(food)=> setFoodFilter(food)}/>
        <CostsFilterBar contentText={"Gold"} setCostFilter = {(gold)=> setGoldFilter(gold)}/>
        {filteredUnits.length !==0 ?
          <table>
          <tbody>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>costs</th>
              </tr>
            {filteredUnits.map(unit => (
                <tr key={unit.id} onClick = {()=>handleTableRowClick(unit)}>
                  <td>{unit.id}</td>
                  <td>{unit.name}</td>
                  <td>{unit.age}</td>
                  <td>{unit.cost ? <span>{unit.cost.Wood ? <span>Wood: {unit.cost.Wood},<br/></span>:""}
                  {unit.cost.Food ? <span>Food: {unit.cost.Food},<br/></span>:""}
                  {unit.cost.Gold ? <span>Gold: {unit.cost.Gold}<br/></span>:""}
                  </span> : ""} 
                  </td>
                </tr>
            )) }
            </tbody> 
          </table> 
        : "no matching data"}
      </div>
   
  )
}
