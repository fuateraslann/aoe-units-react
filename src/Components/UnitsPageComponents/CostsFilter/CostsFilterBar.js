import React , {useState}from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./CostsFilterBar.scss"
export default function CostsFilterBar({contentText , setCostFilter}) {
    const [selected,setSelected] = useState(false)

    const handleChange = () => { 
        setSelected(!selected)   
    }; 
    const getFilterValue = (event)=>{
        console.log(event.target.value)
    }
    return ( 
        <div className='container'>
            <div className='checkbox'>
                <input value = "Woods" type="checkbox" onChange={handleChange}/> 
                <label htmlFor="Woods">{contentText}</label><br/><br/> 
            </div>
            <Box sx={{ width: 150 , marginLeft : "15px" }}>
                <Slider
                    min = {0}
                    max = {200}
                    disabled = {selected ? false : true}
                    onChange={getFilterValue}
                    valueLabelDisplay="auto"
                />
            </Box>
        </div> 
        
    ); 
}
