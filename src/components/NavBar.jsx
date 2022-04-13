import React, { Component } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradingIcon from "@mui/icons-material/Grading";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CheckIcon from "@mui/icons-material/Check";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";

import { styled } from "@mui/system";
export default function NavBar() {
  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }
  const navigate = useNavigate();
  const btnHandler = (text) => {
    switch (text) {
      case "User Profile":
        navigate("/");
        break;
      case "Chat":
        navigate("/chat");
        break;
      case "Sign-Out":
        handleLogout();
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#00000034",
            color: "white",
          },
        }}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 2, border: 1, borderColor: "#FFFFFF" }}>
          <Typography variant="h4" align="justify">
            Navigation
          </Typography>
        </Box>
        <List>
          {["User Profile", "Chat", "Sign-Out"].map((text, index) => (
            <ListItemButton onClick={() => btnHandler(text)} key={text}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
