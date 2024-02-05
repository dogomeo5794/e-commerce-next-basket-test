import { LinkButtonStyled } from "@/styles/ProductItem.style";
import { Colors } from "@/theme/colors";
import { List, ListItem } from "@mui/material";
import React from "react";

const ProductDetailsTab: React.FC<{
  tabs: Array<string | React.ReactNode>;
}> = ({ tabs }) => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tabs.map((tab, key) => (
        <ListItem
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "220px",
            padding: "0",
          }}
          key={key}
        >
          <LinkButtonStyled
            href="#"
            color={Colors.secondary_text_color}
            fontWeight={600}
            sx={{
              "&:hover": {
                background: "#edecec",
              },
              display: "flex",
              flexDirection: "row",
              gap: 0.5,
              justifyContent: "center",
              padding: "12px",
              width: "100%"
            }}
          >
            {tab}
          </LinkButtonStyled>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductDetailsTab;
