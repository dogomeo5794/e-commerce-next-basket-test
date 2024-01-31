import { Typography, Box, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "@/theme/theme";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "24px",
  fontFamily: 'Montserrat, sans-serif',
  color: "#252B42",
  fontWeight: 700,
}));

export const MyList = styled(List)(({ className }) => ({
  display: className === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center"
}))
