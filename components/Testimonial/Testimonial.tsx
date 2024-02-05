"use client"

import { CardFlatStyled } from '@/styles/Card.style'
import { Box, Card, CardContent, Container, Grid, ImageList, ImageListItem, Rating, Typography } from '@mui/material'
import React from 'react'
import StarSolidSmIcon from '../icons/StarSolidSmIcon'
import StarOutlinedSmIcon from '../icons/StarOutlinedSmIcon'
import { DescriptionTextStyled } from './Testimonial.style'
import { Colors } from '@/theme/colors'
import { LinkButton } from '@/styles/Button.style'
import Image from 'next/image'

function Testimonial() {
  const itemData = [
    {
      img: '/images/testimonials/t-image-1.jpg',
      title: 'Breakfast',
    },
    {
      img: '/images/testimonials/t-image-2.jpg',
      title: 'Burger',
    },
    {
      img: '/images/testimonials/t-image-3.jpg',
      title: 'Camera',
    },
    {
      img: '/images/testimonials/t-image-4.jpg',
      title: 'Coffee',
    },
    {
      img: '/images/testimonials/t-image-5.jpg',
      title: 'Hats',
    },
    {
      img: '/images/testimonials/t-image-6.jpg',
      title: 'Honey',
    },
    {
      img: '/images/testimonials/t-image-7.jpg',
      title: 'Basketball',
    },
    {
      img: '/images/testimonials/t-image-8.jpg',
      title: 'Fern',
    },
    {
      img: '/images/testimonials/t-image-9.jpg',
      title: 'Mushrooms',
    },
  ];

  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <Container sx={{
      padding: "80px 0",
      textAlign: "center"
    }}>
      <Box>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}
            sx={{
              display: "flex",
              width: "438px",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              flexShrink: "0",
            }}
          >
            <DescriptionTextStyled variant='h6'
              fontSize="24px"
              lineHeight="32px"
              letterSpacing="0.1px"
              color={Colors.default_color}
              marginTop={2}
            >
              What they say about us
            </DescriptionTextStyled>
            <CardFlatStyled
              sx={{
                display: "flex",
                width: "446px",
                padding: "30px 35px",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <CardContent sx={{
                display: "flex",
                width: "442px",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
              }}>
                <Box sx={{
                  display: "flex",
                  width: "90px",
                  height: "90px",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                {/* <MediaContent> */}
                  <Image
                    src="/images/testimonials/user-1.png"
                    alt="Sample"
                    loading="lazy"
                    style={{
                      width: "90px",
                      height: "90px",
                      flexShrink: "0",
                      borderRadius: "90px",
                      border: `1.8px solid ${Colors.muted}`,
                      // background: "url(<path-to-image>), lightgray 50% / cover no-repeat";
                    }}
                    width={90}
                    height={90}
                  />
                {/* </MediaContent> */}
                </Box>
                <Box sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "5px"
                }}>
                  <Rating
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    icon={<StarSolidSmIcon />}
                    emptyIcon={<StarOutlinedSmIcon />}
                  />
                </Box>
                <DescriptionTextStyled variant='h6'
                  color={Colors.secondary_text_color}
                >
                  Slate helps you see how many more days you need to work to reach your financial goal.
                </DescriptionTextStyled>

                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                  <LinkButton>
                    Regina Miles
                  </LinkButton>
                  <DescriptionTextStyled
                    color={Colors.default_color}
                  >
                    Designer
                  </DescriptionTextStyled>
                </Box>
              </CardContent>
            </CardFlatStyled>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ul style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              margin: 0,
              padding: 0,
            }}>
            {/* <ImageList sx={{ width: "428.307px", height: "428.307px" }} cols={3}> */}
              {itemData.map((item) => (
                <ImageListItem key={item.img} style={{ width: "142.769px", height: "142.769px" }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            {/* </ImageList> */}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Testimonial