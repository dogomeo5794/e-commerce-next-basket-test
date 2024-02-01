"use client"

import { Typography, styled } from "@mui/material";

export const DescriptionTextStyled = styled(Typography)<{
  lineHeight?: string;
  fontSize?: string;
  fontWeight?: string | number;
}>(({ lineHeight, fontSize, fontWeight }) => ({
  fontWeight: fontWeight || "700",
  fontSize: fontSize || "14px",
  fontStyle: "normal",
  lineHeight: lineHeight || "24px",
  letterSpacing: "0.2px",
}));

