import * as React from "react";
import { styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: '#1A2536',
  "&:hover": {
    backgroundColor: '#1A2536'
  },
  "&:focus-within": {
    backgroundColor: '#1A2536'
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top:"0",
  color: "#fff"
}));




const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color:'#fff',
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "30em"
      }
    }
  }
}));

 function SearchAppBar() {
  return (
    <Box>
        <Toolbar>
          <Search>
          <StyledInputBase
              placeholder="Title, Movies, Keyword"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>        
          </Search>
        </Toolbar>
    </Box>
  );
}

export default SearchAppBar;