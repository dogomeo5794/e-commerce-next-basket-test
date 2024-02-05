import { Box, Divider } from "@mui/material";
import React from "react";
import { BoxLabel } from "../cards/SectionTitle";
import { TypographyStyled } from "@/styles/Typography.style";
import { ProductContainerStyled } from "./Product.style";
import ProductListCard from "../cards/ProductListCard";
import { Colors } from "@/theme/colors";

function ProductBestSellerCard() {
  return (
    <Box sx={{
      padding: "24px 100px",
      flexDirection: "column",
    }}>
      <Box padding="24px 0 48px 0">
        <BoxLabel alignItems="flex-start" margin="27px 0">
          <TypographyStyled
            variant="h3"
            color={Colors.default_color}
            lineHeight="32px"
            letterSpacing="0.1px"
            alignItems="left"
            fontSize="24px"
          >
            BESTSELLER PRODUCTS
          </TypographyStyled>
        </BoxLabel>
        <ProductContainerStyled padding="15px 0">
          <Divider sx={{ width: "100%", marginBottom: "20px" }} />
          <ProductListCard />
        </ProductContainerStyled>
      </Box>
    </Box>
  );
}

export default ProductBestSellerCard;
