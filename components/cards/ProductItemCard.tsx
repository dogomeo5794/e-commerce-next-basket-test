import { CardMediaStyled, LinkButtonStyled, ProductBoxStyled, ProductTextStyled } from "@/styles/ProductItem.style";
import { Colors } from "@/theme/colors";
import { Card, CardContent } from "@mui/material";
import React from "react";

interface ProductItemData {
  bgImage: string
  title: string
  link: string
  price: string
  subPrice: string
}

const ProductItemCard: React.FC<ProductItemData> = ({
  bgImage,
  title,
  link,
  price,
  subPrice
}) => {
  return (
    // <Card sx={{ width: "183px" }}>
    <Card sx={{
      // width: "183px",
      // border: "0",
      boxShadow: "none",
      borderRadius: "0",
    }}>
      <ProductBoxStyled
        height="238px"
        padding="5px 3px"
        alignItems="flex-start"
        gap="5px"
        alignSelf="stretch"
        flexDirection="column"
      >
        <CardMediaStyled
          image={bgImage}
          title="Product Item"
        />
      </ProductBoxStyled>
      <CardContent>
        <ProductTextStyled
          variant="h5"
          color={Colors.default_color}
          fontWeight={700}
        >
          {title}
        </ProductTextStyled>

        <LinkButtonStyled href="javascript:void(0)">
          {link}
        </LinkButtonStyled>
        <ProductBoxStyled>
          <ProductTextStyled
            variant="h5"
            color={Colors.muted}
            fontSize="16px"
          >
            {price}
          </ProductTextStyled>
          <ProductTextStyled
            variant="h5"
            color={Colors.secondary_color_1}
          >
            {subPrice}
          </ProductTextStyled>
        </ProductBoxStyled>
      </CardContent>
    </Card>
  );
};

export default ProductItemCard;
