import React from 'react'
import SectionTitle from '../cards/SectionTitle'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import FeatureItemCard from './FeatureItemCard'
import BookReaderIcon from '../icons/BookReaderIcon'
import ArrowGrowthIcon from '../icons/ArrowGrowthIcon'
import CarbonBookIcon from '../icons/CarbonBookIcon'

function Feature() {
  const featureItems = [
    {
      icon: <BookReaderIcon />,
      title: "Easy Wins",
      description: "Get your best looking smile now!"
    },
    {
      icon: <CarbonBookIcon />,
      title: "Concrete",
      description: "Defalcate is most focused in helping you discover your most beautiful smile"
    },
    {
      icon: <ArrowGrowthIcon />,
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem."
    }
  ]
  return (
    <Container sx={{
      padding: "80px 0px"
    }}>
      <Box>
        <SectionTitle
          title="Featured Products"
          subTitle="THE BEST SERVICES"
          description="Problems trying to resolve the conflict between"
        />
      </Box>
      <Box>
        <Grid container>
          {featureItems.map((data, key) => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FeatureItemCard 
                icon={data.icon}
                title={data.title}
                description={data.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Feature