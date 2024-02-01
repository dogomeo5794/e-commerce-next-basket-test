"use client"

import { Typography, styled } from "@mui/material";

type Props = {
  lineHeight?: string;
  fontSize?: string;
  fontWeight?: string | number;
}

export const TypographyStyled = styled(Typography)<Props>(({ lineHeight, fontSize, fontWeight }) => ({
  fontWeight: fontWeight || "700",
  fontSize: fontSize || "14px",
  fontStyle: "normal",
  lineHeight: lineHeight || "24px",
  letterSpacing: "0.2px",
}));
