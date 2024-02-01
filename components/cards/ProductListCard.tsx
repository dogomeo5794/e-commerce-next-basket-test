"use client"

import { Grid } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import ProductItemCard from "./ProductItemCard";

type Ref = {
  loadMoreProduct: () => void
} | null;

type ProductProps = {
  children?: React.ReactNode | null;
};

const ProductListCard = forwardRef<Ref, ProductProps>(({ children = null }: ProductProps, ref) => {
  useImperativeHandle(ref, () => ({
    loadMoreProduct() {
      console.log("child load more...")
    }
  }))

  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, key) => (
        <Grid item key={key}>
          {/* <Grid item lg={3} md={3} sm={4} xs={12}> */}
          <ProductItemCard
            bgImage={`/images/products/product-${product}.jpg`}
            title="Graphic Design"
            link="English Department"
            price="$16.48"
            subPrice="$6.48"
          />
        </Grid>
      ))}
    </Grid>
  );
});

export default ProductListCard;
