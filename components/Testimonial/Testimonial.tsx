"use client"

import { CardFlatStyled } from '@/styles/Card.style'
import { Box, Card, CardContent, Container, Grid, ImageList, ImageListItem, Rating, Typography } from '@mui/material'
import React from 'react'
import StarSolidSmIcon from '../icons/StarSolidSmIcon'
import StarOutlinedSmIcon from '../icons/StarOutlinedSmIcon'
import { DescriptionTextStyled } from './Testimonial.style'
import { Colors } from '@/theme/colors'
import { LinkButton } from '@/styles/Button.style'
import Image from "next/legacy/image"
import { CardMediaStyled } from '@/styles/ProductItem.style'

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
    <Container sx={(theme) => ({
      padding: "80px 0",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        padding: "0 35px"
      }
    })}>
      <Box>
        <Grid container>
          <Grid item lg={7} md={6} sm={12} xs={12}>
            <DescriptionTextStyled variant='h6'
              fontSize="24px"
              lineHeight="32px"
              letterSpacing="0.1px"
              color={Colors.default_color}
              padding="10px 0"
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  padding: "0 30px"
                }
              })}
            >
              What they say about us
            </DescriptionTextStyled>
            <CardFlatStyled
              sx={{
                marginTop: "10px"
              }}
            >
              <CardContent>
                <Box>
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
                    loader={({ src }) => src}
                  />
                {/* </MediaContent> */}
                </Box>
                <Box sx={{
                  padding: "10px 0"
                }}>
                  <Rating
                    value={rating}
                    // onChange={(event, newValue) => {
                    //   setRating(newValue);
                    // }}
                    icon={<StarSolidSmIcon />}
                    emptyIcon={<StarOutlinedSmIcon />}
                    readOnly
                  />
                </Box>
                <DescriptionTextStyled variant='h6'
                  color={Colors.secondary_text_color}
                  padding="10px 40px"
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      padding: "10px 5px"
                    }
                  })}
                >
                  Slate helps you see how many more days you need to work to reach your financial goal.
                </DescriptionTextStyled>

                <Box sx={{
                  padding: "10px",
                  textAlign: "center"
                }}>
                  <LinkButton
                    justifyContent="center"
                  >
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
          <Grid item lg={5} md={6} sm={12} xs={12}>
            {/* <Box sx={(theme) => ({
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              width: "475px",
              overflow: "auto",
              [theme.breakpoints.down("md")]: {
                width: '475px',
              },
              [theme.breakpoints.down("sm")]: {
                width: '295px',
              }
            })}>
              {itemData.map((item) => (
                <CardMediaStyled
                  image={item.img}
                  title={item.title}
                  sx={(theme) => ({
                    height: '150px',
                    width: '150px',
                    [theme.breakpoints.up("md")]: {
                      height: '132px',
                      width: '132px',
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: '90px',
                      width: '90px',
                    },
                    [theme.breakpoints.down("xs")]: {
                      height: '90px',
                      width: '90px',
                    }
                  })}
                />
              ))}
            </Box> */}

            
            <ul style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              margin: 0,
              padding: 0,
            }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} 
                  style={{ width: "142.769px", height: "142.769px" }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Testimonial