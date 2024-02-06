"use client";

import { Colors } from "@/theme/colors";
import { Box, List, ListItemIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const HeaderWrapper = styled(Box)(() => ({
  gap: "10px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
}));

export const AppBarHeader = styled(Typography)(({ theme }) => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "24px",
  fontFamily: "Montserrat, sans-serif",
  color: Colors.default_color,
  fontWeight: 700,
  maxWidth: "12rem",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%"
  }
}));

export const TopBarButtonList = styled(List)<{
  type: string;
  align?: string;
}>(({ type, align }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: align || "center",
  alignItems: "center",
}));

export const BadgeCountLabel = styled(Typography)(() => ({
  fontSize: "12px",
  color: Colors.primary,
  fontWeight: 400,
  fontStyle: "normal",
}));

export const ListItemIconBar = styled(ListItemIcon)<{ 
  padding?: string 
}>(({ padding }) => ({
    display: "flex",
    padding: padding || "15px",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer"
  })
);

export const TopBarMediaIcon = styled(ListItemIcon)(() => ({
  padding: "5px",
  minWidth: 0,
  alignItems: "flex-start",
}));

export const HeaderItemText = styled(Typography)<{color?:string}>(({ color }) => ({
  color: color || Colors.secondary_text_color,
  fontSize: "14px",
  fontWeight: "700",
}));

export const ListItemTopBarLabel = styled(Typography)(() => ({
  fontSize: "14px",
  color: Colors.white,
  fontWeight: 700,
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "0.2px",
}));

export const HeaderDarkStyled = styled(Box)(({ theme }) => ({
  height: "58px",
  backgroundColor: Colors.secondary_color_1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 24px",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

export const HeaderLightStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "58px",
  padding: "0px 17px 0px 38px",
  // padding: "0px 100px 0px 100px",
  // justifyContent: "flex-end",
  alignItems: "center",
  gap: "40px",
  [theme.breakpoints.down("md")]: {
    height: "90px",
    display: "grid"
  }
}));

export const LinkButtonHoverStyled = styled(Link)(() => ({
  padding: "5px 10px",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  gap: "5px",
  "&:hover": {
    background: "#f1eeee"
  }
}));
