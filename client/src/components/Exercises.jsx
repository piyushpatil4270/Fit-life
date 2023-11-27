import React from 'react'
import { useState,useEffect } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box,Stack,Typography } from '@mui/material'
import Exercisecard from './Exercisecard'
const Exercises = ({exercises,bodyParts,setexercises}) => {
  console.log(exercises)
  return (
    <Box  id="exercises"
    mt="50px"
    sx={{mt:{lg:"110px"}}}
    p="20px"
    >
   {exercises && <Typography variant='h4' mb="40px" ml="40px">Showing Results</Typography>  } 
    <Stack
    direction="row"
    sx={{gap:{lg:"110px",xs:"50px"}}}
    flexWrap="wrap"
    justifyContent="center"
    >
   {exercises.map((exercise,index)=>(
   <Exercisecard key={index} exercise={exercise}/>
   ))}
    </Stack>
    </Box>
  )
}
export default Exercises
