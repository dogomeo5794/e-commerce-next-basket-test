"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ProductDetailsCard from '@/components/ProductCard/ProductDetailsCard';
import ProductDescriptionCard from '@/components/ProductCard/ProductDescriptionCard';
import ProductBestSellerCard from '@/components/ProductCard/ProductBestSellerCard';
import ProductBrandLogoListCard from '@/components/ProductCard/ProductBrandLogoListCard';
import { API } from '@/lib/api';
import { ProductDataInterface } from '@/components/cards/ProductListCard';

const ProductDetails: React.FC = () => {
  const params = useParams();
  const productId = params?.id;
  const [product, setProduct] = React.useState<ProductDataInterface>({
    brand: "",
    category: "",
    description: "",
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: "",
  });

  const gerProductDetails = async({ productId }: { productId?: any}) => {
    const {data, status} = await API.get(`/products/${productId}`);
    console.log('data', data)
    setProduct(data)
  }

  React.useEffect(() => {
    if (productId) {
      gerProductDetails({ productId: productId });
    }
  }, [])

  return (
    <>
      <BreadCrumb />
      <ProductDetailsCard product={product} />
      <ProductDescriptionCard product={product} />
      <ProductBestSellerCard />
      <ProductBrandLogoListCard />
    </>
  )
}

export default ProductDetails