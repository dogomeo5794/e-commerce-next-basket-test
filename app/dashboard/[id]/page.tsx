'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const DashboardDetails: React.FC = () => {
  const params = useParams();
  return (
      <h1>DashboardDetails { params.id }</h1>
  )
}

export default DashboardDetails