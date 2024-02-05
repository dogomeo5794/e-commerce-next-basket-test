import { CardFlatStyled } from "@/styles/Card.style";
import { CardMediaStyled, LinkButtonStyled, ProductBoxStyled, ProductTextStyled } from "@/styles/ProductItem.style";
import { Colors } from "@/theme/colors";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Link as ReactRouterLink } from 'react-router-dom';

export interface ProductDataPropsInterface {
  bgImage: string
  title: string
  link: string
  price: number
  discountedPrice: number
  id: number
}

const ProductItemCard: React.FC<ProductDataPropsInterface> = ({
  bgImage,
  title,
  link,
  price,
  discountedPrice,
  id
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  });

  const priceFormat = formatter.format(price)

  const discount = price * (discountedPrice / 100);
  const discounted = price - discount;
  const disPriceFormat = formatter.format(discounted)

  return (
    // <Card sx={{ width: "183px" }}>
    <CardFlatStyled>
      <ProductBoxStyled
        // height="238px"
        height="350px"
        padding="5px 3px"
        alignItems="flex-start"
        gap="5px"
        alignSelf="stretch"
        flexDirection="column"
      >
        <CardMediaStyled
          image={bgImage}
          title={title}
        />
      </ProductBoxStyled>
      <CardContent sx={{ textAlign: "center" }}>
        <ProductTextStyled
          variant="h5"
          color={Colors.default_color}
          fontWeight={700}
        >
          {title}
        </ProductTextStyled>

        <LinkButtonStyled href={`/products/${id}`} passHref>
          {link}
        </LinkButtonStyled>
        <ProductBoxStyled>
          <ProductTextStyled
            variant="h5"
            color={Colors.muted}
            fontSize="16px"
            title="Original Price"
          >
            {priceFormat}
          </ProductTextStyled>
          <ProductTextStyled
            variant="h5"
            color={Colors.secondary_color_1}
            title="Discounted Price"
          >
            {disPriceFormat}
          </ProductTextStyled>
        </ProductBoxStyled>
      </CardContent>
    </CardFlatStyled>
  );
};

export default ProductItemCard;
