"use client"

import { Colors } from "@/theme/colors";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export const BoxLabel = styled(Box)<{ alignItems?: string }>(({ alignItems }) => ({
  display: "flex",
  // width: "692px",
  flexDirection: "column",
  alignItems: alignItems || "center",
}))

const SectionTitle: React.FC<{
  title: any,
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
          sx={(theme) => ({
            color: Colors.secondary_text_color,
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            letterSpacing: "0.2px",
          })}
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          sx={(theme) => ({
            color: Colors.default_color,
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "0.1px",
            [theme.breakpoints.down("sm")]: {
              width: "248px"
            }
          })}
        >
          {subTitle}
        </Typography>

        <Typography
          variant="body1"
          sx={(theme) => ({
            color: Colors.secondary_text_color,
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.2px",
            [theme.breakpoints.down("sm")]: {
              width: "200px"
            }
          })}
        >
          {description}
        </Typography>
      </Box>
    </BoxLabel>
  );
}

export default SectionTitle;
