import React , {useEffect, useState}from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./CostsFilterBar.scss"
export default function CostsFilterBar({contentText , setCostFilter}) {
    const [selected,setSelected] = useState(false)
    const [value,setValue] = useState(200)

    const handleSelect = () => { 
        setSelected(!selected)   
    }; 
    
    useEffect(()=>{
        selected ? setCostFilter(value) : setCostFilter(null) 
    },[selected , value ,setCostFilter])

    return ( 
        <div className='container'>
            <div className='checkbox'>
                <input value = {contentText} type="checkbox" onChange={handleSelect}/> 
                <label htmlFor={contentText}>{contentText}</label><br/><br/> 
            </div>
            <Box sx={{ width: 150 , marginLeft : "15px" }}>
                <Slider
                    min = {0}
                    max = {200}
                    defaultValue = {200}
                    disabled = {selected ? false : true}
                    onChange={(e) => setValue(e.target.value)}
                    valueLabelDisplay="auto"
                />
            </Box>
        </div> 
        
    ); 
}
