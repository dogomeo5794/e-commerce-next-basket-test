import { TypographyStyled } from '@/styles/Typography.style'
import { Box, Button, Divider, Grid, InputBase, Link, Paper } from '@mui/material'
import React from 'react'
import FacebookSmIcon from '../icons/FacebookSmIcon'
import InstagramSmIcon from '../icons/InstagramSmIcon'
import TwitterSmIcon from '../icons/TwitterSmIcon'
import { Colors } from '@/theme/colors'
import FooterLink from './FooterLink'
import { ResponsiveBox } from './Footer.style'

function Footer() {
  return (
    // <Box padding="0 170px">
    <ResponsiveBox>
      <Box>
        <Box padding="40px 0">
          <Grid container justifyContent="space-between">
            <Grid item lg={3} md={3} sm={12}
              display="flex"
              alignItems="center"
            >
              <Box sx={{
                display: "flex",
                padding: "13px 73px 13px 0px",
                alignItems: "center",
              }}>
                <TypographyStyled variant='h3'
                  color={Colors.default_color}
                  fontSize="24px"
                  lineHeight="32px"
                >
                  Bandage
                </TypographyStyled>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}>
                <Link href="#"
                  display="flex"
                  alignItems="center"
                >
                  <FacebookSmIcon 
                    color={Colors.primary}
                  />
                </Link>
                <Link href="#"
                  display="flex"
                  alignItems="center"
                >
                  <InstagramSmIcon 
                    color={Colors.primary}
                  />
                </Link>
                <Link href="#"
                  display="flex"
                  alignItems="center"
                >
                  <TwitterSmIcon 
                    color={Colors.primary}
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider />

      <Box>
        <Box padding="50px 0">
          <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={12} xs={12} marginTop={3}>
              <FooterLink 
                title='Company Info'
                links={[
                  {
                    label: "About Us",
                    link: ""
                  },
                  {
                    label: "Carrier",
                    link: ""
                  },
                  {
                    label: "We are hiring",
                    link: ""
                  },
                  {
                    label: "Blog",
                    link: ""
                  }
                ]}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12} marginTop={3}>
              <FooterLink 
                title='Legal'
                links={[
                  {
                    label: "About Us",
                    link: ""
                  },
                  {
                    label: "Carrier",
                    link: ""
                  },
                  {
                    label: "We are hiring",
                    link: ""
                  },
                  {
                    label: "Blog",
                    link: ""
                  }
                ]}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12} marginTop={3}>
              <FooterLink 
                title='Features'
                links={[
                  {
                    label: "Business Marketing",
                    link: ""
                  },
                  {
                    label: "User Analytic",
                    link: ""
                  },
                  {
                    label: "Live Chat",
                    link: ""
                  },
                  {
                    label: "Unlimited Support",
                    link: ""
                  }
                ]}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12} marginTop={3}>
              <FooterLink 
                title='Resources'
                links={[
                  {
                    label: "IOS & Android",
                    link: ""
                  },
                  {
                    label: "Watch a Demo",
                    link: ""
                  },
                  {
                    label: "Customers",
                    link: ""
                  },
                  {
                    label: "API",
                    link: ""
                  }
                ]}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} marginTop={3}>
              <Box display="flex" flexDirection="column" gap={2.5}>
                <TypographyStyled
                  variant="h5"
                  color={Colors.default_color}
                  fontSize="16px"
                >
                  Get In Touch
                </TypographyStyled>
                <Box>
                  <Paper
                    component="form"
                    sx={{ 
                      padding: '0', 
                      display: 'flex', 
                      alignItems: 'center', 
                      // width: 400,
                      boxShadow: "none",
                      border: "1px solid #E6E6E6",
                      borderRadius: "5px",
                    }}
                  >
                    <InputBase
                      sx={{ 
                        padding: "15px 20px",
                        width: "100%"
                      }}
                      placeholder="Your Email"
                    />
                    <Button variant='contained' 
                      style={{ 
                        padding: "15px 22.5px", 
                        border: "#E6E6E6",
                        borderRadius: "0px 5px 5px 0px",
                        height: "62px",
                        background: Colors.primary
                      }}
                    >
                      <TypographyStyled variant='body1'
                        color={Colors.white}
                        lineHeight="22px"
                        textAlign="center"
                        textTransform="capitalize"
                      >
                        Subscribe
                      </TypographyStyled>
                    </Button>
                  </Paper>
                  <TypographyStyled variant='body1'
                    color={Colors.secondary_text_color}
                    fontSize="12px"
                    fontWeight={400}
                    lineHeight="28px"
                  >
                    Lore imp sum dolor Amit
                  </TypographyStyled>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        padding: "25px 0px",
        flexDirection: "column",
        alignItems: "flex-start",
        flexShrink: "0",
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "213px",
        }}>
          <TypographyStyled variant='body1'
            color={Colors.secondary_text_color}
            sx={{
              padding: {
                xs: "24px 30px",
                sm: "0",
              },
              textAlign: {
                xs: "center",
                sm: "left"
              }
            }}
          >
            Made With Love By Finland All Right Reserved 
          </TypographyStyled>
        </Box>
      </Box>
    </ResponsiveBox>
  )
}

export default Footer