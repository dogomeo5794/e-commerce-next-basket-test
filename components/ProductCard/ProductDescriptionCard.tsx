import { TypographyStyled } from "@/styles/Typography.style";
import { Box, Button, Card, Divider, Grid, IconButton, List, ListItem, Rating } from "@mui/material";
import React from "react";
import DotSolidIcon from "../icons/DotSolidIcon";
import { Colors } from "@/theme/colors";
import HeartSmIcon from "../icons/HeartSmIcon";
import BasketDefaultIcon from "../icons/BasketDefaultIcon";
import HeartDefaultIcon from "../icons/HeartDefaultIcon";
import EyeDefaultIcon from "../icons/EyeDefaultIcon";
import { FavoriteBorder, HeartBrokenOutlined } from "@mui/icons-material";
import ProductCarouselCard from "./ProductCarouselCard";
import { LinkButtonStyled } from "@/styles/ProductItem.style";
import { CardFlatStyled } from "@/styles/Card.style";

const ProductDescriptionCard: React.FC = () => {
  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "24px 100px",
        flexDirection: "column",
      }}
    >
      <Box>
        <List sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}>
          <ListItem
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "220px",
              padding: "0"
            }}
          >
            <LinkButtonStyled href="#"
              color={Colors.secondary_text_color}
              fontWeight={600}
              padding="24px"
            >
              Description
            </LinkButtonStyled>
          </ListItem>
          <ListItem
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "220px",
              padding: "0"
            }}
          >
            <LinkButtonStyled href="#"
              color={Colors.secondary_text_color}
              fontWeight={700}
              padding="24px"
            >
              Additional Information
            </LinkButtonStyled>
          </ListItem>
          <ListItem
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "220px",
              padding: "0"
            }}
          >
            <LinkButtonStyled href="#"
              color={Colors.secondary_text_color}
              fontWeight={700}
              padding="24px"
              display="flex"
              flexDirection="row"
              gap={0.5}
            >
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
            </LinkButtonStyled>
          </ListItem>
        </List>
      </Box>

      <Divider />

      <Box>
        <Box padding="24px 0 48px 0">
          <Grid container>
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
            <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDescriptionCard;
