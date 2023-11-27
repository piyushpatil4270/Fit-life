import React,{useState,useEffect} from 'react'
import { useParams} from "react-router-dom"
import {Box} from "@mui/material"
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exeerciseOptions, fetchData } from '../utils/fetchdata'
import axios from 'axios'
const ExerciseDetails = () => {
  const [exercise,setexercise]=useState({})
  const {id}=useParams()
  const fetchExerciseData=async()=>{
    const exercisedburl="https://exercisedb.p.rapidapi.com"
    const youtubesearchurl="https://youtube-search-and-download.p.rapidapi.com"
    const exercisedetailData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exeerciseOptions)
    setexercise(exercisedetailData)
  }
  useEffect(()=>{
    fetchExerciseData()
    console.log("exercisedetaildata",exercise)
  },[id])
  
  return (
    <Box>
    <Detail exercise={exercise} />
    <ExerciseVideos/>
    <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetails
