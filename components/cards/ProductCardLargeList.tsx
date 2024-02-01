import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCardLarge from "./ProductCardLarge";

function FirstBatchCards() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={5}>
          <ProductCardLarge />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <ProductCardLarge />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <ProductCardLarge />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <ProductCardLarge />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <ProductCardLarge />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <ProductCardLarge />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <ProductCardLarge />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FirstBatchCards;
