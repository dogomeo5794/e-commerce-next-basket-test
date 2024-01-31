import { Card, CardContent } from "@mui/material";
import React from "react";

const ProductCardLg: React.FC<{
  maxWidth: string,
  height: string,
  bgImage: String,
  children: React.ReactNode
}> = ({
  maxWidth,
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

export default ProductCardLg;
