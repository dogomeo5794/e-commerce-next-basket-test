import { Card, CardContent } from "@mui/material";
import React from "react";

interface ShopCardItemData {
  maxWidth?: string
  height?: string
  bgImage?: String
  children: React.ReactNode
}

const ShopCardItem: React.FC<ShopCardItemData> = ({
  height,
  bgImage,
  children
}) => {
  return (
    <Card
      sx={{
        // maxWidth: maxWidth,
        borderRadius: "0",
        boxShadow: "none",
        height: height,
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default ShopCardItem;
