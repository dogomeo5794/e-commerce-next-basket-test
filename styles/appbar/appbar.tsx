import { Typography, Box, List, ListItemIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "@/theme/theme";

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
}))

export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "24px",
  fontFamily: 'Montserrat, sans-serif',
  color: "#252B42",
  fontWeight: 700,
  maxWidth: "12rem"
}));

export const TopBarButtonList = styled(List)<{
  type: string,
  alignItem?: string
}>(({ type, alignItem }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: alignItem || "center",
  alignItems: "center",
}))

export const BadgeCountLabel = styled(Typography)(() => ({
  fontSize: "12px",
  color: "#23A6F0",
  fontWeight: 400,
  fontStyle: "normal"
}));

export const ListItemIconBar = styled(ListItemIcon)(() => ({
  display: "flex",
  padding: "15px",
  alignItems: "center",
  gap: "5px",
}));

export const HeaderItemText = styled(Typography)(() => ({
  color: "#737373",
  fontSize: "14px",
  fontWeight: "700",
}))

export const ListItemTopBar = styled(ListItemIcon)(() => ({
  display: "flex",
  padding: "10px",
  alignItems: "center",
  gap: "5px",
}));

export const TopBarMediaIcon = styled(ListItemIcon)(() => ({
  padding: "5px",
  minWidth: 0,
  alignItems: "flex-start"
}));


export const ListItemTopBarLabel = styled(Typography)(() => ({
  fontSize: "14px",
  color: "#FFF",
  fontWeight: 700,
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "0.2px"
}));
