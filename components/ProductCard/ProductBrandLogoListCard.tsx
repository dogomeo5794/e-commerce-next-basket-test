import { Box, Grid } from "@mui/material";
import React from "react";
import FaBrandHooliIcon from "../icons/FaBrandHooliIcon";
import FaBrandLyftIcon from "../icons/FaBrandLyftIcon";
import FaBrandPiperHatIcon from "../icons/FaBrandPiperHatIcon";
import FaBrandAwsIcon from "../icons/FaBrandAwsIcon";
import FaBrandStripeIcon from "../icons/FaBrandStripeIcon";
import FaBrandRedditIcon from "../icons/FaBrandRedditIcon";

function ProductBrandLogoListCard() {
  return (
    <Box sx={{
      textAlign: "center",
			padding: "24px 100px",
      flexDirection: "column",
		}}>
      <Box padding="50px 0">
        <Grid container alignItems="center" spacing={10}>
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <FaBrandHooliIcon />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <FaBrandLyftIcon />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <FaBrandPiperHatIcon />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <FaBrandStripeIcon />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <FaBrandAwsIcon />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <FaBrandRedditIcon />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductBrandLogoListCard;
