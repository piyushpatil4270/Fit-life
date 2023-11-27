import { Box, Stack, Typography,Button } from "@mui/material";
import React from "react";
import HeroBannerImg from "../assets/Running.jpg"
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography  fontWeight={700}
      mb="23px"
      mt="30px"
      sx={{
        fontSize:{lg:"44px",xs:"40px"}
      }}
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography
      fontSize="22px"
      lineHeight="35px"
      marginBottom={3}
      >
       Check out the most effective exercises
      </Typography>
      <Button
      variant="contained"
      color="success"
      href="#exercises"
      >
      Explore Exercises
      </Button>
      <img 
      src={HeroBannerImg}
      className="hero-banner-img"
      alt="banner"
      style={{height:"700px"}} />
     
    </Box>
  );
};

export default HeroBanner;
