import { TypographyStyled } from "@/styles/Typography.style";
import { Colors } from "@/theme/colors";
import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import ArrowRightMuted from "../icons/ArrowRightMuted";
import { LinkButtonStyled } from "@/styles/ProductItem.style";

const BreadCrumbItem: React.FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb"
      separator={<ArrowRightMuted />}
    >
      <LinkButtonStyled color="inherit" href="/">
        <TypographyStyled variant="body1" color={Colors.default_color}>
          Home
        </TypographyStyled>
      </LinkButtonStyled>
      <Typography color={Colors.muted}>
        Shop
      </Typography>
    </Breadcrumbs>
  )
};

export default BreadCrumbItem;
