import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import logo from "../assets/exercise2.png";

const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    sx={{gap:{
        sm:"122px",
        xs:"40px"
    },
   mt:{
        sm:"15px",
        xs:"5px" 
    },
    justifyContent:"none"
    }}
    >
    <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "100px",
            height: "85px",
            margin: "0 20px",
         
          }}
        />
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"

      >
        <Link to="/" style={{ 
            textDecoration: "none",
            color: "#3a1212",
            borderBottom:"3px solid #FF2625"
            
            }}>
          <Typography  fontSize="22px">Home</Typography>
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
         <Typography  fontSize="22px">Exercises</Typography>
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
