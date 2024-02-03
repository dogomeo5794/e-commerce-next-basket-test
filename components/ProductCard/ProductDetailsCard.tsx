import { TypographyStyled } from "@/styles/Typography.style";
import { Box, Button, Divider, Grid, IconButton, Rating } from "@mui/material";
import React, { useCallback } from "react";
import DotSolidIcon from "../icons/DotSolidIcon";
import { Colors } from "@/theme/colors";
import HeartSmIcon from "../icons/HeartSmIcon";
import BasketDefaultIcon from "../icons/BasketDefaultIcon";
import HeartDefaultIcon from "../icons/HeartDefaultIcon";
import EyeDefaultIcon from "../icons/EyeDefaultIcon";
import { FavoriteBorder, HeartBrokenOutlined } from "@mui/icons-material";
import ProductCarouselCard from "./ProductCarouselCard";
import StarSolidSmIcon from "../icons/StarSolidSmIcon";
import StarOutlinedSmIcon from "../icons/StarOutlinedSmIcon";
import { BoxFlexCenter } from "../Blog/Blog.style";
import { API } from "@/lib/api";
import { ProductItemDataInterface } from "../cards/ProductItemCard";
import { useParams } from "next/navigation";

const ProductDetailsCard: React.FC = () => {
  const params = useParams();
  const productId = params?.id;
  console.log('productId', productId)
  const [rating, setRating] = React.useState<number | null>(4);
  const [product, setProduct] = React.useState<ProductItemDataInterface | null>(null);

  const gerProductDetails = async({ productId }: { productId?: any}) => {
    const {data, status} = await API.get(`/products/${productId}`);
    console.log('data', data)
    setRating(data?.rating)
    setProduct(data)
  }

  React.useEffect(() => {
    gerProductDetails({ productId: productId });
  }, [])

  const getFormattedPrice = useCallback((price: number): string => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    });
  
    return formatter.format(price)
  }, [])

  return (
    <BoxFlexCenter
      sx={{
        padding: "24px 100px",
        flexDirection: "column",
      }}
    >
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ProductCarouselCard />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box 
            padding="11px 24px"
            display="flex"
            flexDirection="column"
          >
            <TypographyStyled variant="h4"
              color={Colors.default_color}
              fontSize="20px"
              fontWeight={400}
              lineHeight="30px"
            >
              {product?.title}
            </TypographyStyled>
            <BoxFlexCenter sx={{
              gap: "7px",
              margin: "15px 0"
            }}>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                icon={<StarSolidSmIcon />}
                emptyIcon={<StarOutlinedSmIcon />}
              />
              <TypographyStyled variant="h6"
                color={Colors.secondary_text_color}
              >
                10 Reviews
              </TypographyStyled>
            </BoxFlexCenter>
            <TypographyStyled variant="h4"
              color={Colors.default_color}
              fontSize="24px"
              lineHeight="32px"
              letterSpacing="0.1px"
              margin="5px 0"
            >
              {getFormattedPrice(product?.price || 0)}
            </TypographyStyled>
            <BoxFlexCenter>
              <TypographyStyled variant="h6"
                color={Colors.secondary_text_color}
              >
                Availability :
              </TypographyStyled>
              <TypographyStyled variant="h6"
                color={Colors.primary}
              >
                In Stock
              </TypographyStyled>
            </BoxFlexCenter>

            <Divider sx={{ margin: "85px 0 25px 0" }} />

            <BoxFlexCenter sx={{
              display: "inline-flex",
              gap: "10px",
            }}>
              <DotSolidIcon color={Colors.primary} />
              <DotSolidIcon color={Colors.success} />
              <DotSolidIcon color={Colors.warning} />
              <DotSolidIcon color={Colors.default_color} />
            </BoxFlexCenter>

            <Box sx={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "10px",
              marginTop: "60px"
            }}>
              <Button variant='contained' style={{
                textTransform: "capitalize",
                background: Colors.primary,
                padding: "10px 20px"
              }}>
                Select Options
              </Button>

              <IconButton style={{
                borderRadius: "44.786px",
                border: "1px solid #E8E8E8",
                background: "#FFF",
              }}>
                <FavoriteBorder style={{color: "#252B42"}} />
              </IconButton>

              <IconButton style={{
                borderRadius: "44.786px",
                border: "1px solid #E8E8E8",
                background: "#FFF",
              }}>
                <BasketDefaultIcon />
              </IconButton>

              <IconButton style={{
                borderRadius: "44.786px",
                border: "1px solid #E8E8E8",
                background: "#FFF",
              }}>
                <EyeDefaultIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </BoxFlexCenter>
  );
};

export default ProductDetailsCard;
