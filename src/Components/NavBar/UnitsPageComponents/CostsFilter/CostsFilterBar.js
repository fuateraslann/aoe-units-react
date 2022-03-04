import React , {useState}from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./CostsFilterBar.scss"
export default function CostsFilterBar({contentText}) {
    const [selected,setSelected] = useState(false)

    const handleChange = () => { 
        setSelected(!selected)   
    }; 
    const getFilterValue = ()=>{

    }
    return ( 
        <div className='container'>
            <div className='checkbox'>
                <input value = "Woods" type="checkbox" onChange={handleChange}/> 
                <label for="Woods">{contentText}</label><br/><br/> 
            </div>
            <Box sx={{ width: 150 , marginLeft : "15px" }}>
                <Slider
                    min = {0}
                    max = {200}
                    getAriaLabel={() => 'Temperature range'}
                    disabled = {selected ? false : true}
                    onChange={getFilterValue}
                    valueLabelDisplay="auto"
                />
            </Box>
        </div> 
        
    ); 
}
