"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { Box, Grid } from '@mui/material';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ProductDetailsCard from '@/components/ProductCard/ProductDetailsCard';
import ProductDescriptionCard from '@/components/ProductCard/ProductDescriptionCard';

const ProductDetails: React.FC = () => {
  const params = useParams();
  return (
    <>
      <BreadCrumb />
      <ProductDetailsCard />
      <ProductDescriptionCard />
    </>
  )
}

export default ProductDetails