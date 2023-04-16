import React from 'react';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem,sidebarClasses} from "react-pro-sidebar";
import { Box,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import UpdateIcon from '@mui/icons-material/Update';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';




function SideNav() {

  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    )
  }

  const [selected, setSelected] = useState("Discover");


  return (
    
   <Box>
      <Sidebar className='sideBar-style'  rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: '#1F2A3C',
      
    },

    [`.${sidebarClasses.root}`]:{
      borderColor:'#1F2A3C',
    }
  }}>
        <Menu menuItemStyles={{
          button:({active,level,hover}) =>{
            if(level === 0){
              return{
                color: active ? "#00E0FF" : "#D4D7DD",
                backgroundColor : hover ? '#f3f3f300' : 'transparent',
              }
            }
          }
        }}>

            <Box mb="25px" mt="25px" borderBottom="1px solid #394B61">
              <Box display="flex" justifyContent="center" alignItems="center" pb="11px">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center" pb="25px">
                <Typography
                  variant="20px"
                  color="#D4D7DD"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                  fontSize="20px"
                >
                  Eric Hoffman
                </Typography>
              </Box>
            </Box>

          {/* user icon end */}

          {/* menu-item start */}

          <Box  borderBottom="1px solid #394B61" color="#D4D7DD" pb="13px">
            <Item 
              title="Discover"
              to="/"
              icon={<SearchOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              color="#00E0FF !important" 
            />
             <Item 
              title="Playlist"
              to="/Playlist"
              icon={<PlaylistPlayIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item 
              title="Movie"
              to="/Movie"
              icon={<LiveTvIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item 
              title="TV Shows"
              to="/tv"
              icon={<TvIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item 
              title="My List"
              to="/myList"
              icon={<ListIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>

          <Box borderBottom="1px solid #394B61" color="#D4D7DD" pb="13px">
            <Item 
              title="Watch Later"
              to="/later"
              icon={<UpdateIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item 
              title="Recommended"
              to="/recommended"
              icon={<FavoriteBorderIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
          </Box>

          <Box color="#D4D7DD">
            <Item 
              title="Setting"
              to="/setting"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item 
              title="Logout"
              to="/logout"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
          </Box>

        </Menu>

      </Sidebar>


    </Box>

  )
}

export default SideNav;
