import React from 'react'
import { Box, IconButton } from "@mui/material";
// import { useContent } from '@mui/material';
// import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchAppBar from '../searchBar/search';



function Topbar() {

    return (
        <>
            <Box display="flex" justifyContent="space-between" p={2}>

                {/* search bar-left side */}
               <Box>
                <SearchAppBar />
               </Box>
                {/* icons right-side */}

                <Box display="flex">
                    <IconButton>
                        <WbSunnyOutlinedIcon sx={{color:"#fff"}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon sx={{color:"#fff"}}/>
                    </IconButton>

                </Box>



            </Box>
        </>
    )
}

export default Topbar
