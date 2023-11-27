import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchData, exeerciseOptions } from "../utils/fetchdata";
import { FetchBodyParts } from "../utils/fetchbodyparts";
import HorizontalscrollBar from "./HorizontalscrollBar";
const SearchElement = ({setexercises,bodyParts,setBodyParts}) => {
  const [search, setsearch] = useState("");
  const[allbodyparts,setallbodyparts]=useState([])
  const fetchexerciseData = async () => {
    const bodyPartsdata = await axios.request(FetchBodyParts);
    setallbodyparts(["all", ...bodyPartsdata.data]);
  };
  useEffect(() => {
    fetchexerciseData();
  }, []);
  console.log("bodyParts", bodyParts);
  const handlesearch = async () => {
    if (search) {
      const exerciseData = await axios.request(exeerciseOptions);
      const searchedExercises = exerciseData.data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setsearch("");
      setexercises(searchedExercises);
      console.log(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
      Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handlesearch}
        >
          Search
        </Button>
      </Box>
      <Box
      sx={{position:'relative',width:"100%",p:"20px"}}
      >
       <HorizontalscrollBar data={allbodyparts} bodyParts={bodyParts} setBodyParts={setBodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchElement;
