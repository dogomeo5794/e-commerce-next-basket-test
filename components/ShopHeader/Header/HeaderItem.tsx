import { HeaderItemText } from "@/styles/appbar/appbar";
import theme from "@/theme/theme";
import { ListItemText } from "@mui/material";
import React from "react";

export const HeaderItem: React.FC<{
  icon?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ icon, children }) => {
  return (
    <ListItemText>
      {icon && (
        <HeaderItemText
          variant="body1"
          gap={1}
          display="flex"
          alignItems="center"
        >
          {children}
          {icon}
        </HeaderItemText>
      )}
      {!icon && <HeaderItemText variant="body1">{children}</HeaderItemText>}
    </ListItemText>
  );
};
