import { Box, Typography } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'

import {ScrollMenu,VisibilityContext} from "react-horizontal-scrolling-menu"
const HorizontalscrollBar = ({data,bodyParts,setBodyParts}) => {
return (
    <ScrollMenu>
        {data.map((item)=>(
            <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
           
            >
          <BodyPart  item={item} bodyParts={bodyParts} setBodyParts={setBodyParts}/>
          </Box>
        ))}
   

    </ScrollMenu>
  )
}

export default HorizontalscrollBar
