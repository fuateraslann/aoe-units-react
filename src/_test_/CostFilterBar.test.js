import React from 'react'
import { render,screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import CostFilterBar from "../Components/UnitsPageComponents/CostsFilter/CostsFilterBar"

it("renders correctly", () => {
    render(<CostFilterBar setCostFilter={(arg)=>console.log(arg)} />)
})