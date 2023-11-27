import React,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchElement from '../components/SearchElement'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setexercises] = useState([]);
  const[bodyParts,setBodyParts]=useState("all")
  return (
    <Box>
      <HeroBanner/>
      <SearchElement
      setexercises={setexercises}
      bodyParts={bodyParts}
      setBodyParts={setBodyParts}
      
      />
      <Exercises
       exercises={exercises}
       bodyParts={bodyParts}
       setexercises={setexercises}
      />
    </Box>
  )
}

export default Home
