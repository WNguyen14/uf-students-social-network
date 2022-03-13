import React, { Component } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";
import Paper from "@mui/material/Paper";
import { majors } from "../Data/data";

const Searching = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const Search = () => {
  return (
    <Box position="relative" sx={{ display: { xs: "none", md: "flex" } }}>
      <Searching>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Autocomplete
          id="combo-box-demo"
          options={majors}
          getOptionLabel={(option) => option}
          PaperComponent={({ children }) => (
            <Paper style={{ color: "#ffffff", background: "#444444" }}>
              {children}
            </Paper>
          )}
          style={{ width: 300 }}
          renderInput={(params) => (
            <StyledInputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              {...params}
              placeholder="Search for majors"
            />
          )}
        />
      </Searching>
    </Box>
  );
};

export default Search;
