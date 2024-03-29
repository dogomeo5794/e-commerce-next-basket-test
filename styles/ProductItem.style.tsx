import { Colors } from "@/theme/colors";
import { Box, CardMedia, Typography, styled } from "@mui/material";
import Link from "next/link";

export const ProductBoxStyled = styled(Box)(() => ({
  display: "flex",
  padding: "5px 3px",
  alignItems: "flex-start",
  gap: "5px",
  justifyContent: "center",
}));

export const LinkButtonStyled = styled(Link)<{
  color?: string,
  fontWeight?: string | number,
  fontSize?: string | number,
  fontStyle?: string,
  lineHeight?: string | number,
  letterSpacing?: string,
  textDecoration?: string,
}>(({
  color,
  fontWeight,
  fontSize,
  fontStyle,
  lineHeight,
  letterSpacing,
  textDecoration,
}) => ({
  color: color || Colors.secondary_text_color,
  fontWeight: fontWeight || "700",
  fontSize: fontSize || "14px",
  fontStyle: fontStyle || "normal",
  lineHeight: lineHeight || "24px",
  letterSpacing: letterSpacing || "0.2px",
  textAlign: "center",
  textDecoration: textDecoration || "none",
}));

export const ProductTextStyled = styled(Typography)(() => ({
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  textAlign: "center",
}));

export const CardMediaStyled = styled(CardMedia)(() => ({
  // width: "183px",
  width: "100%",
  // height: "238px",
  height: "350px",
  flexShrink: 0,
}));
