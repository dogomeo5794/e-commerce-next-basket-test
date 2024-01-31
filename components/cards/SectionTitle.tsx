"use client"

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export const BoxLabel = styled(Box)(() => ({
  display: "flex",
  // width: "692px",
  flexDirection: "column",
  alignItems: "center",
}))

const SectionTitle: React.FC<{
  title: string,
  subTitle: string,
  description: string
}> = ({
  title,
  subTitle,
  description
}) => {
  return (
    <BoxLabel>
      <Box
        sx={{
          display: "flex",
          width: "691px",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#737373",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            letterSpacing: "0.2px",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "#252B42",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "0.1px",
          }}
        >
          {subTitle}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#737373",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </BoxLabel>
  );
}

export default SectionTitle;
