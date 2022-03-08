import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import HomePage from "../Pages/HomePage"




describe("Home Page" , ()=>{

    beforeAll(()=>{
        
    })

    it("renders correctly and contain correct header",()=>{
        render(<HomePage/>);
        expect(screen.getByText(/HOME/)).toBeInTheDocument()
    })
    test("image renders correctly" , ()=>{
        render(<HomePage/>)
        expect(screen.getByTestId("home-page-image")).toBeInTheDocument()
    })

})



