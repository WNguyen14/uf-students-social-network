import React from 'react'
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search.jsx";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {theme} from "../Data/theme";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../firebase';
import Postboard from './Postboard/Postboard'
const SearchBar = () => {
  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                UF Students Social Network
              </Typography>
              <Search></Search>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
      <LogoutIcon onClick={handleLogout} style={{ color:'white'  }} >Sign Out</LogoutIcon>
      <Postboard />
    </>
  );
}

export default SearchBar;