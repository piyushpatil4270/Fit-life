import React from 'react'
import { Stack,Typography } from '@mui/material'
import gymicon from "../assets/gym3.png"
const BodyPart = ({item,bodyParts,setBodyParts}) => {
    console.log("item",item)
    console.log("bps",bodyParts)
  return (
    <Stack
   
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodypart-card'
    onClick={()=>{
      setBodyParts(item)
      window.scrollTo({top:1800,left:100,behavior:"smooth"})
    }}
    sx={
        bodyParts===item?{
            borderTop:"4px solid #ff2625",
            backgroundColor:"#fff",
            borderBottomLeftRadius:"20px",
            width:"270px",
            height:"280px",
            gap:"47px",
            cursor:"pointer"
        }:{
            
            backgroundColor:"#fff",
            borderBottomLeftRadius:"20px",
            width:"270px",
            height:"280px",
            gap:"47px",
            cursor:"pointer"
        }}
    
    >
    <img src={gymicon}  alt='dumbell' style={{width:"100px" ,height:"100px"}} /> 
    <Typography
    color="black"
    fontSize="18px"
    fontWeight="bold"
    >{item.toUpperCase()}</Typography>
    </Stack>
  )
}

export default BodyPart
