"use client"

import { Grid } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import ProductItemCard from "./ProductItemCard";
import { API } from "@/lib/api";

interface ProductData {
  brand: string,
  category: string
  description: string
  discountPercentage: number
  id: number
  images: Array<string>
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

interface Ref {
  loadMoreProduct: () => void
}

interface ProductProps {
  setLoading?: (state: boolean) => void,
  setLoadedAllProduct?: (state: boolean) => void,
  children?: React.ReactNode | null;
};

const ProductListCard = forwardRef<Ref, ProductProps>(({ children = null, setLoading, setLoadedAllProduct }: ProductProps, ref) => {
  useImperativeHandle(ref, () => ({
    loadMoreProduct() {
      gerProducts({ loadMore: true });
    }
  }))

  const [products, setProducts] = React.useState<Array<ProductData>>([]);
  const [paginate, setPaginate] = React.useState({
    total: 0,
    limit: 8,
    skip: 0,
  })

  const gerProducts = async({ loadMore }: { loadMore?: boolean}) => {
    setLoading ? setLoading(true) : null;

    const {data, status} = await API.get("/products", { skip: paginate.skip, limit: paginate.limit });
    
    if (products.length + data.products.length === data.total) {
      setLoadedAllProduct ? setLoadedAllProduct(true) : null;
    }
    else {
      setLoadedAllProduct ? setLoadedAllProduct(false) : null;
    }

    setPaginate((prevState) => {
      prevState.total = data.total
      prevState.skip = data.limit + data.skip
      return prevState;
    })

    setProducts((prevState) => {
      if (loadMore) {
        return [...prevState, ...data.products];
      }
      else {
        return data.products
      }
    })

    setLoading ? setLoading(false) : null;
  }

  React.useEffect(() => {
    gerProducts({ loadMore: false });
  }, [])

  return (
    <Grid container spacing={2}>
      {products.map((product: ProductData, key) => (
        // <Grid item key={key}>
        <Grid item lg={3} md={3} sm={4} xs={12} key={product.id}>
          <ProductItemCard
            bgImage={product.thumbnail}
            title={product.title}
            link={product.category}
            price={product.price}
            discountedPrice={product.discountPercentage}
            id={product.id}
          />
        </Grid>
      ))}
    </Grid>
  );
});

export default ProductListCard;
