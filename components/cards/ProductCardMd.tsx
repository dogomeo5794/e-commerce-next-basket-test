import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const ProductCardMd: React.FC<{
  bgImage: string,
  title: string,
  link: string,
  price: string,
  subPrice: string,
}> = ({
  bgImage,
  title,
  link,
  price,
  subPrice
}) => {
  return (
    // <Card sx={{ width: "183px" }}>
    <Card sx={{
      // width: "183px",
      // border: "0",
      boxShadow: "none",
      borderRadius: "0",
    }}>
      <Box
        sx={{
          display: "flex",
          height: "238px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <CardMedia
          sx={{
            width: "183px",
            height: "238px",
            flexShrink: 0,
          }}
          image={bgImage}
          title="green iguana"
        />
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            color: "#252B42",
            fontWeight: "700",
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "24px",
            letterSpacing: "0.1px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>

        <Link
          href="#"
          style={{
            color: "#737373",
            fontWeight: "700",
            fontSize: "14px",
            fontStyle: "normal",
            lineHeight: "24px",
            letterSpacing: "0.2px",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          {link}
        </Link>
        <Box
          sx={{
            display: "flex",
            padding: "5px 3px",
            alignItems: "flex-start",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#BDBDBD",
              fontSize: "16px",
              fontStyle: "normal",
              lineHeight: "24px",
              letterSpacing: "0.1px",
              textAlign: "center",
            }}
          >
            {price}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#23856D",
              fontSize: "16px",
              fontStyle: "normal",
              lineHeight: "24px",
              letterSpacing: "0.1px",
              textAlign: "center",
            }}
          >
            {subPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCardMd;
