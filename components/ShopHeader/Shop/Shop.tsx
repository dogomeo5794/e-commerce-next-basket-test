"use client"

import { Grid, Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import ProductCardLg from "@/components/cards/ProductCardLg";

export const ShopItemLabel = styled(Typography)((color) => ({
  fontfamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  letterSpacing: "0.2px",
}))

function Shop() {
  return (
    <Box style={{ padding: "4px 147px" }}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <ProductCardLg
            maxWidth="451px"
            height="616px"
            bgImage="/images/bg/media-bg-cover-1.png"
          >
            <ShopItemLabel variant="h6"
              sx={{
                color: "#2DC071",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              5 Items
            </ShopItemLabel>
            <ShopItemLabel variant="h6"
              sx={{
                color: "#252B42",
                fontSize: "40px",
                lineHeight: "50px",
              }}
            >
              FURNITURE
            </ShopItemLabel>
            <ShopItemLabel variant="h6"
              sx={{
                color: "#252B42",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              Read More
            </ShopItemLabel>
          </ProductCardLg>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ProductCardLg
                maxWidth="679px"
                height="300px"
                bgImage="/images/bg/media-bg-cover-2.png"
              >
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#2DC071",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  5 Items
                </ShopItemLabel>
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#252B42",
                    fontSize: "40px",
                    lineHeight: "50px",
                  }}
                >
                  FURNITURE
                </ShopItemLabel>
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#252B42",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  Read More
                </ShopItemLabel>
              </ProductCardLg>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ProductCardLg
                maxWidth="679px"
                height="300px"
                bgImage="/images/bg/media-bg-cover-3.png"
              >
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#2DC071",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  5 Items
                </ShopItemLabel>
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#252B42",
                    fontSize: "40px",
                    lineHeight: "50px",
                  }}
                >
                  FURNITURE
                </ShopItemLabel>
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#252B42",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  Read More
                </ShopItemLabel>
              </ProductCardLg>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ProductCardLg
                maxWidth="679px"
                height="300px"
                bgImage="/images/bg/media-bg-cover-4.png"
              >
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#2DC071",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  5 Items
                </ShopItemLabel>
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#252B42",
                    fontSize: "40px",
                    lineHeight: "50px",
                  }}
                >
                  FURNITURE
                </ShopItemLabel>
                <ShopItemLabel variant="h6"
                  sx={{
                    color: "#252B42",
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  Read More
                </ShopItemLabel>
              </ProductCardLg>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Shop;
