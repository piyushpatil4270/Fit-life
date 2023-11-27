import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import targetimg from "../assets/target.png"
import equipmentimg from "../assets/equipment.png"
import bodypartimg from "../assets/bodypart.png"
const Detail = ({ exercise }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercise;
  const extradetail=[{
    name:bodyPart,
    icon:bodypartimg
  },{
    name:target,
    icon:targetimg
  },{
    name:equipment,
    icon:equipmentimg
  }]
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" style={{height:"60%"}} />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }} style={{height:"60%"}}>
        <Typography variant="h4">{name?.toUpperCase()}</Typography>
        <Typography>
          The best exercise for {bodyPart} is {name}.It also keeps your energy levels high.
        </Typography>
        {extradetail.map((item)=>(
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
          <Button sx={{backgroundColor:"#fff2db"}}>
            <img src={item.icon} />
          
          </Button>
          <Typography variant="h6">{item?.name?.toUpperCase()}</Typography>
          </Stack>
        ))}

      </Stack>
    </Stack>
  );
};

export default Detail;
