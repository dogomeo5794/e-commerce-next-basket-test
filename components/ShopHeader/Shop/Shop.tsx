"use client"

import { Grid, Box } from "@mui/material";
import React from "react";
import ShopCard from "./ShopCard";

function Shop() {
  return (
    // <Box style={{ padding: "4px 147px" }}>
    <Box
      sx={(theme) => ({
        padding: "4px 100px",
        [theme.breakpoints.down("sm")]: {
          padding: "4px 35px"
        }
      })}
    >
      <Grid container spacing={2}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <ShopCard
            maxWidth="451px"
            // height="616px"
            height={{
              xs: '300px',  // 100% width on extra-small screens
              sm: '300px', // 400px width on small screens
              md: '616px', // 500px width on medium screens
              lg: '616px', // 679px width on large screens and up
            }}
            bgImage="/images/bg/media-bg-cover-1.png"
            itemLabel="5 Items"
            title="FURNITURE"
          />
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ShopCard
                maxWidth="679px"
                height="300px"
                bgImage="/images/bg/media-bg-cover-2.png"
                itemLabel="5 Items"
                title="FURNITURE"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ShopCard
                maxWidth="679px"
                height="300px"
                bgImage="/images/bg/media-bg-cover-3.png"
                itemLabel="5 Items"
                title="FURNITURE"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ShopCard
                maxWidth="679px"
                height="300px"
                bgImage="/images/bg/media-bg-cover-4.png"
                itemLabel="5 Items"
                title="FURNITURE"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Shop;
