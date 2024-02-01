import { Colors } from "@/theme/colors";
import { Button, Container, styled } from "@mui/material";

export const ProductButtonStyled = styled(Button)(() => ({
  border: `1px solid ${Colors.primary}`,
  color: Colors.primary,
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "22px",
  letterSpacing: "0.2px",
  padding: "15px 40px",
}));

export const ProductContainerStyled = styled(Container)(() => ({
  display: "flex",
  padding: "80px 0px",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
}));
