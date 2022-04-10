import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

import Search from "./Search.jsx";
import MajorSearch from "./MajorSearch.jsx";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../Data/theme";
import { logout } from "../firebase";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Selections from "./Selections.jsx";
import Postboard from "./Postboard/Postboard";
import NavBar from "./NavBar.jsx";
const ChatPage = () => {
  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          rowSpacing={18}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <AppBar>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Box sx={{ p: 2.2 }}>
                  {/* 2.2 here to make it match with the sidebar */}
                  <Typography variant="h4" align="justify">
                    UF Students Social Network
                  </Typography>
                </Box>
              </Grid>
            </AppBar>
          </Grid>
          <Grid item xs={4}>
            <Postboard />
            {/* <Selections /> */}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default ChatPage;
