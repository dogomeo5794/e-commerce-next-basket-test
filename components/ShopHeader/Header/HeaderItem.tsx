import { HeaderItemText } from "./Header.style";
import theme from "@/theme/theme";
import { Box, Link, ListItem, ListItemText } from "@mui/material";
import React from "react";

export const HeaderItem: React.FC<{
  icon?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ icon, children }) => {
  return (
    <ListItem disablePadding>
      <Link href="#" underline="none">
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
      </Link>
    </ListItem>
  );
};
