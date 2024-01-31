import { SearchOff } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardFeatureItem: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string
}> = ({
  icon,
  title,
  description
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          padding: "35px 40px",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "72px",
            height: "72px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h3"
          sx={{
            color: "#252B42",
            fontWeight: "700",
            fontSize: "24px",
            fontStyle: "normal",
            lineHeight: "32px",
            letterSpacing: "0.1px",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#737373",
            fontSize: "14px",
            fontStyle: "normal",
            lineHeight: "20px",
            letterSpacing: "0.2px",
            fontWeight: "400",
            textAlign: "center"
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardFeatureItem;
