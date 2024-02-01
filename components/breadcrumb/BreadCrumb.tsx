import { Box, Grid } from "@mui/material";
import React from "react";
import BreadCrumbItem from "./BreadCrumbItem";

const BreadCrumb: React.FC = () => {
  return (
    <Box sx={{
      display: "flex",
      // width: "1440px",
      padding: "24px 100px",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Grid container>
        <Grid item>
          <BreadCrumbItem />
        </Grid>
      </Grid>
    </Box>
  )
};

export default BreadCrumb;
