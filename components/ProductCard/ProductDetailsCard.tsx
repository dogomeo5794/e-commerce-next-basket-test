import { TypographyStyled } from "@/styles/Typography.style";
import { Box, Button, Divider, Grid, IconButton, Rating } from "@mui/material";
import React from "react";
import DotSolidIcon from "../icons/DotSolidIcon";
import { Colors } from "@/theme/colors";
import HeartSmIcon from "../icons/HeartSmIcon";
import BasketDefaultIcon from "../icons/BasketDefaultIcon";
import HeartDefaultIcon from "../icons/HeartDefaultIcon";
import EyeDefaultIcon from "../icons/EyeDefaultIcon";
import { FavoriteBorder, HeartBrokenOutlined } from "@mui/icons-material";
import ProductCarouselCard from "./ProductCarouselCard";

const ProductDetailsCard: React.FC = () => {
  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "24px 100px",
        flexDirection: "column",
        alignItems: "center",
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
              Floating Phone
            </TypographyStyled>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                margin: "15px 0"
            }}>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <TypographyStyled variant="h6"
                color={Colors.secondary_text_color}
              >
                10 Reviews
              </TypographyStyled>
            </Box>
            <TypographyStyled variant="h4"
              color={Colors.default_color}
              fontSize="24px"
              lineHeight="32px"
              letterSpacing="0.1px"
              margin="5px 0"
            >
              $1,139.33
            </TypographyStyled>
            <Box sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}>
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
            </Box>

            <Divider sx={{ margin: "85px 0 25px 0" }} />

            <Box sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <DotSolidIcon color={Colors.primary} />
              <DotSolidIcon color={Colors.success} />
              <DotSolidIcon color={Colors.warning} />
              <DotSolidIcon color={Colors.default_color} />
            </Box>

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
    </Box>
  );
};

export default ProductDetailsCard;
