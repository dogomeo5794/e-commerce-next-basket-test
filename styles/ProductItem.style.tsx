import { Colors } from "@/theme/colors";
import { Box, CardMedia, Link, Typography, styled } from "@mui/material";

export const ProductBoxStyled = styled(Box)(() => ({
  display: "flex",
  padding: "5px 3px",
  alignItems: "flex-start",
  gap: "5px",
  justifyContent: "center",
}));

export const LinkButtonStyled = styled(Link)(() => ({
  color: Colors.secondary_text_color,
  fontWeight: "700",
  fontSize: "14px",
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "0.2px",
  textAlign: "center",
  textDecoration: "none",
}));

export const ProductTextStyled = styled(Typography)(() => ({
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  textAlign: "center",
}));

export const CardMediaStyled = styled(CardMedia)(() => ({
  width: "183px",
  height: "238px",
  flexShrink: 0,
}));
