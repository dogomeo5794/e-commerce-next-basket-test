"use client";

import { Box, Card, Typography, styled } from "@mui/material";

export const BlogContentWrapper = styled(Box)(() => ({
  gap: "80px",
  display: "flex",
  flexDirection: "column",
  margin: "112px 0",
}));

export const BlogCard = styled(Card)(() => ({
  boxShadow: "none",
  borderRadius: "0",
  background: "#FFF",
  WebkitBoxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
  display: "flex",
  maxWidth: "348px",
  // width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
}));

export const BlogCardMedia = styled(Box)(() => ({
  display: "flex",
  height: "238px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  position: "relative"
}));

export const BlogCardTag = styled(Box)(() => ({
  display: "inline-flex",
  padding: "0px 10px",
  alignItems: "center",
  borderRadius: "3px",
  background: "#E74040",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
  position: "absolute",
  top: "20px",
  left: "20px",
}))

export const BlogCardTagText = styled(Typography)<{
  lineHeight?: string,
  fontSize?: string,
  fontWeight?: string
}>(({ lineHeight, fontSize, fontWeight }) => ({
  fontWeight: fontWeight || "400",
  fontSize: fontSize || "12px",
  fontStyle: "normal",
  lineHeight: lineHeight || "16px",
  letterSpacing: "0.2px",
}))

export const BoxFlexCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}))


