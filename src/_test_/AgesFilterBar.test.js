import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import AgesFilterBar from "../Components/UnitsPageComponents/AgesFilter/AgesFilterBar"


it("renders correctly and contains correct buttons", () => {
    render(<AgesFilterBar />)
    expect(screen.getByText("All")).toBeInTheDocument()
    expect(screen.getByText("Dark")).toBeInTheDocument()
    expect(screen.getByText("Imperial")).toBeInTheDocument()
    expect(screen.getByText("Feudal")).toBeInTheDocument()
    expect(screen.getByText("Castle")).toBeInTheDocument()
})
