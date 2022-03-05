import React from 'react'
import {Route, Routes } from "react-router-dom";

import HomePage from "../Pages/HomePage"
import UnitDetailsPage from '../Pages/UnitDetailsPage';
import UnitsPage from '../Pages/UnitsPage';

export default function MainRouter() {
  return (
    <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/home" element = {<HomePage/>} />
        <Route path="/units" element = {<UnitsPage/>} />
        <Route path="/unitDetail" element = {<UnitDetailsPage/>} />
    </Routes>
  )
}
