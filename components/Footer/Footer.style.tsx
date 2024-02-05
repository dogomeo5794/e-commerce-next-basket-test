"use client"

import { Box, styled } from "@mui/material";

export const ResponsiveBox = styled(Box)(({ theme }) => ({
  padding: "0 100px",
  [theme.breakpoints.down("md")]: {
    padding: "0 50px",
  },
}));
