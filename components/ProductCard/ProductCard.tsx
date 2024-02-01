"use client"

import { Box, Button, Container, Grid, styled } from '@mui/material'
import React from 'react'
import ProductCardMd from '../cards/ProductCardMd'
import SectionTitle from '../cards/SectionTitle'
import { Colors } from '@/theme/colors'

function ProductCard() {
  return (
    <Container sx={{
      // display: "flex",
      padding: "0px 160px",
      // justifyContent: "flex-end",
      // alignItems: "center",
      textAlign: "center"
    }}>
      <Container sx={{
        display: "flex",
        padding: "80px 0px",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px"
      }}>
        <SectionTitle 
          title='Featured Products'
          subTitle='BESTSELLER PRODUCTS'
          description='Problems trying to resolve the conflict between '
        />

        {/* <Box> */}
          <Grid container spacing={2}>
            {[1,2,3,4,5,6,7,8,9,10].map((product, key) => (
              <Grid item key={key}>
              {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
                <ProductCardMd 
                  bgImage={`/images/products/product-${product}.jpg`}
                  title='Graphic Design'
                  link='English Department'
                  price='$16.48'
                  subPrice='$6.48'
                />
              </Grid>
            ))}
          </Grid>
        {/* </Box> */}
      </Container>
      <Button variant='outlined'
        sx={{
          border: `1px solid ${Colors.primary}`,
          color: Colors.primary,
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "22px",
          letterSpacing: "0.2px",
          padding: "15px 40px"
        }}
      >
        LOAD MORE PRODUCTS
      </Button>
    </Container>
  )
}

export default ProductCard