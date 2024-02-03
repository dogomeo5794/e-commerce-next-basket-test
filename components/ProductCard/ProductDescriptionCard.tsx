import { TypographyStyled } from "@/styles/Typography.style";
import { Box, Button, Card, Divider, Grid, IconButton, ImageListItem, List, ListItem, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import DotSolidIcon from "../icons/DotSolidIcon";
import { Colors } from "@/theme/colors";
import HeartSmIcon from "../icons/HeartSmIcon";
import BasketDefaultIcon from "../icons/BasketDefaultIcon";
import HeartDefaultIcon from "../icons/HeartDefaultIcon";
import EyeDefaultIcon from "../icons/EyeDefaultIcon";
import { FavoriteBorder, HeartBrokenOutlined } from "@mui/icons-material";
import ProductCarouselCard from "./ProductCarouselCard";
import { CardMediaStyled, LinkButtonStyled } from "@/styles/ProductItem.style";
import { CardFlatStyled } from "@/styles/Card.style";
import { ProductContainerStyled } from "./Product.style";
import ProductListCard from "../cards/ProductListCard";
import SectionTitle, { BoxLabel } from "../cards/SectionTitle";
import FaBrandHooliIcon from "../icons/FaBrandHooliIcon";
import FaBrandLyftIcon from "../icons/FaBrandLyftIcon";
import FaBrandStripeIcon from "../icons/FaBrandStripeIcon";
import FaBrandPiperHatIcon from "../icons/FaBrandPiperHatIcon";
import FaBrandAwsIcon from "../icons/FaBrandAwsIcon";
import FaBrandRedditIcon from "../icons/FaBrandRedditIcon";
import { BoxFlexCenter } from "../Blog/Blog.style";
import ProductDetailsTab from "./ProductDescriptionTab";

const ProductDescriptionCard: React.FC = () => {
  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <Box
      sx={{
        padding: "24px 100px",
        flexDirection: "column",
      }}
    >
      <Box>
        <ProductDetailsTab
          tabs={[
            "Description",
            "Additional Information",
            <>
              <TypographyStyled variant="body1"
                color={Colors.secondary_text_color}
                fontWeight={700}
              >
                Reviews
              </TypographyStyled>

              <TypographyStyled variant="body1"
                color={Colors.secondary_text_color}
                fontWeight={700}
              >
                (0)
              </TypographyStyled>
            </>
          ]}
        />
      </Box>

      <Divider style={{ width: "100%", marginBottom: "15px" }} />

      <Box>
        <Box padding="24px 0 48px 0">
          <Grid container spacing={15}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CardFlatStyled
                sx={{
                  display: "flex",
                  gap: "30px",
                  flexDirection: "column",
                }}
              >
                <TypographyStyled variant="h5"
                  color={Colors.default_color}
                  fontSize="24px"
                  lineHeight="32px"
                  letterSpacing="0.1px"
                >
                  the quick fox jumps over 
                </TypographyStyled>
                <TypographyStyled variant="h6"
                  color={Colors.secondary_text_color}
                  fontWeight={400}
                >
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </TypographyStyled>
                <TypographyStyled variant="h5"
                  color={Colors.secondary_text_color}
                  fontWeight={400}
                  borderLeft={`3px solid ${Colors.secondary_color_1}`}
                  paddingLeft="24px"
                >
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </TypographyStyled>
                <TypographyStyled variant="h6"
                  color={Colors.secondary_text_color}
                  fontWeight={400}
                >
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </TypographyStyled>
              </CardFlatStyled>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper sx={{
                width: "100%",
                height: "392px",
                borderRadius: "9px",
              }}>
                <img
                  srcSet="/images/bg/bg-table.jpg"
                  src="/images/bg/bg-table.jpg"
                  alt=""
                  loading="lazy"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "9px",
                    objectFit: "cover"
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Box padding="24px 0 48px 0">
          <BoxLabel alignItems="flex-start" margin="27px">
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
          <ProductContainerStyled
            padding="15px 27px"
          >
            <Divider sx={{ width: "100%", marginBottom: "20px" }} />
            <ProductListCard />
          </ProductContainerStyled>
        </Box>
      </Box>

      <Box>
        <Box padding="50px 20px 50px 20px">
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
    </Box>
  );
};

export default ProductDescriptionCard;
