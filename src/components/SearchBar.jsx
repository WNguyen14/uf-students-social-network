import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import MajorSearch from "./MajorSearch.jsx";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../Data/theme";
import { logout } from "../firebase";
import MenuItem from "@mui/material/MenuItem";

import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Selections from "./Selections.jsx";
import Postboard from "./Postboard/Postboard";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const SearchBar = () => {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          display="flex"
          sx={{
            pb: 2,
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
                EasyTOS MVP
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenUserMenu}
              >
                <AccountCircle />
              </IconButton>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                ></IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center" color="textSecondary">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* <MajorSearch />
          <Box>
            <List>
              {settings.map((setting) => {
                return (
                  <ListItem>
                    <ListItemText primary={setting} />
                  </ListItem>
                );
              })}
            </List>
          </Box> */}
          <img src={require("./image.png")} alt="image" />

          <a href="https://docs.google.com/forms/d/1b1nsylwtAQerrd0jgwFRgrAGt6aV2Esj_xjxiq6OLkU/edit">
            Go to Survey
          </a>
        </Grid>
      </ThemeProvider>
      {/* <LogoutIcon onClick={handleLogout} style={{ color: "white" }}>
        Sign Out
      </LogoutIcon> */}
    </>
  );
};

export default SearchBar;
