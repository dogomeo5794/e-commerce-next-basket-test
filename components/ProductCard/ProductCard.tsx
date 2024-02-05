"use client"

import { Container } from '@mui/material'
import React, { useRef } from 'react'
import SectionTitle from '../cards/SectionTitle'
import ProductListCard from '../cards/ProductListCard'
import { ProductButtonStyled, ProductContainerStyled } from './Product.style'

const ProductCard: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loadedAllProduct, setLoadedAllProduct] = React.useState<boolean>(false);
  const productListRef = useRef<{ loadMoreProduct: () => void }>(null);
  const handleLoadMoreProduct = () => {
    productListRef.current?.loadMoreProduct();
  }

  return (
    <Container sx={(theme) => ({
      padding: "0px 160px",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        padding: "0px 35px",
      }
    })}>
      <ProductContainerStyled
        padding={{
          xs: "80px 0px",
          sm: "80px 0px 50px 0",
        }}
      >
        <SectionTitle 
          title='Featured Products'
          subTitle='BESTSELLER PRODUCTS'
          description='Problems trying to resolve the conflict between '
        />
        <ProductListCard 
          ref={productListRef} 
          setLoading={setLoading}
          setLoadedAllProduct={setLoadedAllProduct}
        />
      </ProductContainerStyled>
      {!loadedAllProduct && (
        <ProductButtonStyled variant='outlined'
          onClick={handleLoadMoreProduct}
          disabled={loading}
        >
          { loading ? 'Loading...' : 'LOAD MORE PRODUCTS' }
        </ProductButtonStyled>
      )}
    </Container>
  )
}

export default ProductCard