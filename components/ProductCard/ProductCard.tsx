"use client"

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, styled } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ProductCardMd from '../cards/ProductCardMd'

export const BoxLabel = styled(Box)(() => ({
  display: "flex",
  // width: "692px",
  flexDirection: "column",
  alignItems: "center",
}))

function ProductCard() {
  return (
    <Container sx={{
      display: "flex",
      padding: "0px 160px",
      justifyContent: "flex-end",
      alignItems: "center",
    }}>
      <Container sx={{
        display: "flex",
        padding: "80px 0px",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px"
      }}>
        <BoxLabel>
          <Box sx={{
            display: "flex",
            width: "691px",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}>
            <Typography variant='h2'
              sx={{
                color: "#737373",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "30px",
                letterSpacing: "0.2px"
              }}
            >
              Featured Products
            </Typography>

            <Typography variant='h3'
              sx={{
                color: "#252B42",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "32px",
                letterSpacing: "0.1px"
              }}
            >
              BESTSELLER PRODUCTS
            </Typography>

            <Typography variant="body1"
              sx={{
                color: "#737373",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0.2px"
              }}
            >
              Problems trying to resolve the conflict between 
            </Typography>
          </Box>
        </BoxLabel>

        {/* <Box> */}
          <Grid container spacing={2}>
            <Grid item>
            {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
              <ProductCardMd 
                bgImage='/images/products/product-1.jpg'
                title='Graphic Design'
                link='English Department'
                price='$16.48'
                subPrice='$6.48'
              />
            </Grid>

            <Grid item>
            {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
              <ProductCardMd 
                bgImage='/images/products/product-2.jpg'
                title='Graphic Design'
                link='English Department'
                price='$16.48'
                subPrice='$6.48'
              />
            </Grid>

            <Grid item>
            {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
              <ProductCardMd 
                bgImage='/images/products/product-3.jpg'
                title='Graphic Design'
                link='English Department'
                price='$16.48'
                subPrice='$6.48'
              />
            </Grid>

            <Grid item>
            {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
              <ProductCardMd 
                bgImage='/images/products/product-4.jpg'
                title='Graphic Design'
                link='English Department'
                price='$16.48'
                subPrice='$6.48'
              />
            </Grid>

            <Grid item>
            {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
              <ProductCardMd 
                bgImage='/images/products/product-5.jpg'
                title='Graphic Design'
                link='English Department'
                price='$16.48'
                subPrice='$6.48'
              />
            </Grid>
          </Grid>
        {/* </Box> */}
      </Container>
    </Container>
  )
}

export default ProductCard