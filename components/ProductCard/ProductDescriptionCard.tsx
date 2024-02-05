import { TypographyStyled } from "@/styles/Typography.style";
import { Box, Divider, Grid, Paper } from "@mui/material";
import React from "react";
import { Colors } from "@/theme/colors";
import { CardFlatStyled } from "@/styles/Card.style";
import ProductDetailsTab from "./ProductDescriptionTab";
import { ProductDataInterface } from "../cards/ProductListCard";
import Image from "next/image";

const ProductDescriptionCard: React.FC<{ product: ProductDataInterface }> = ({ product }) => {
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
                <Image
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
    </Box>
  );
};

export default ProductDescriptionCard;
