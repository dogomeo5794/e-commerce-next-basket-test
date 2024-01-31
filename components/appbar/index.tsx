"use client"

import { useTheme } from "@mui/material/styles";
import React from "react";
import { useMediaQuery } from "@mui/material";
import AppBarMobile from "./appbarMobile";
import AppBarDesktop from "./appbarDesktop";

function AppBar() {
  const theme = useTheme(); 
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* {matches ? <AppBarMobile matches={matches} /> : <AppBarDesktop matches={matches} />} */}

      
      
    </>
  )
}

export default AppBar;
