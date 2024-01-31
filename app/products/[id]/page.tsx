"use client"

import React from 'react'
import { useParams } from 'next/navigation'

function ProductDetails() {
  const params = useParams();
  return (
    <div>ProductDetails { params.id }</div>
  )
}

export default ProductDetails