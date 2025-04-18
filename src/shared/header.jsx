import React from "react";
import { AppBar, Box, Typography, Toolbar, Stack } from "@mui/material";
import image from "../assets/logo1.png"; 
import { useNavigate } from "react-router-dom";
import { ROUTH_PATH } from "../Router/RouthPath";

const Header = () => {
  const navigate = useNavigate()
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#E6E6E6",
        paddingY: "8px",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <img src={image} alt="logo" width="50" style={{ marginRight: 10 }} />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Fi<span style={{ color: "red" }}>Na</span>LTY
            </Typography>
            <Typography variant="body2" fontSize="12px">
              Wealth in Every Brick
            </Typography>
          </Box>
        </Box>

        {/* Navigation Menu */}
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography  sx={{ fontWeight: "bold", cursor:"pointer", '&:hover' : { color :"#E7492C" } }} onClick={()=> navigate(ROUTH_PATH.HOME)} >Home</Typography>
          <Typography sx={{ fontWeight: "bold", cursor:"pointer", '&:hover' : { color :"#E7492C" } }}  onClick={()=> navigate(ROUTH_PATH.ABOUT)} >About</Typography>
          <Typography  sx={{ fontWeight: "bold", cursor:"pointer", '&:hover' : { color :"#E7492C" } }} onClick={()=> navigate(ROUTH_PATH.SERVICES)} >Services</Typography>
          <Typography  sx={{ fontWeight: "bold", cursor:"pointer", '&:hover' : { color :"#E7492C" } }} onClick={()=> navigate(ROUTH_PATH.KEY_PEOPLE)} > Key Peoples</Typography>
          <Typography  sx={{ fontWeight: "bold", cursor:"pointer", '&:hover' : { color :"#E7492C" } }} onClick={()=> navigate(ROUTH_PATH.CONTACT)} >Contact</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
