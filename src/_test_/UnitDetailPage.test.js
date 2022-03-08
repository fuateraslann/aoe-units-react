import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux';
import store from '../Redux/store'
import UnitDetailsPage from "../Pages/UnitDetailsPage"


it("renders correctly and contain correct header",()=>{
    render(<Provider store = {store}>
             <UnitDetailsPage/>
            </Provider>);
    expect(screen.getByText(/DETAIL/)).toBeInTheDocument()
})