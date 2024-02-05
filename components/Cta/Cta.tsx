import { Colors } from '@/theme/colors'
import { Container, Box, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { TypographyStyled } from '@/styles/Typography.style'

function Cta() {
  return (
    <Box sx={{
      height: "640px",
      alignSelf: "stretch",
      background: Colors.white
    }}>
      <Box sx={{
        // background: "grey",
        background: `url("/images/bg/cta-bg-1.jpg"), lightgray 50% / cover no-repeat`,
        backgroundSize: "cover",
        // display: "flex",
        // // width: "1440px",
        minHeight: "640px",
        // justifyContent: "center",
        // alignItems: "center",
        // flexShrink: "0",
        position: "relative"
      }}>
        <Box sx={(theme) => ({
          // display: "flex",
          // width: "1050px",
          // padding: "160px 0px 112px 0px",
          // flexDirection: "column",
          // alignItems: "center",
          // gap: "24px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          padding: "30px",
          [theme.breakpoints.down("md")]: {
            position: "unset",
            top: "unset",
            left: "unset",
            transform: "unset",
            padding: "30px 15px"
          }
        })}>
          {/* <Grid container sx={{
            // display: "flex",
            // width: "607px",
            // flexDirection: "column",
            // alignItems: "center",
            // gap: "36px",
          }}>
            <Grid item sx={{
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              // gap: "30px",
            }}> */}
              <TypographyStyled variant='h2'
                color={Colors.primary}
                textAlign="center"
              >
                Designing Better Experience
              </TypographyStyled>
              <TypographyStyled variant='h2'
                color={Colors.default_color}
                fontSize="40px"
                lineHeight="50px"
                padding="20px 0"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    padding: "20px 10px"
                  }
                })}
              >
                Problems trying to resolve the conflict between
              </TypographyStyled>
              <TypographyStyled variant='body1'
                color={Colors.secondary_text_color}
                fontWeight={400}
                lineHeight="20px"
                textAlign="center"
                padding="15px 90px"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    padding: "15px 30px"
                  }
                })}
              >
                Problems trying to resolve the conflict between the two major realms of Classical physics: 
              </TypographyStyled>
              <Box>
                <TypographyStyled variant='h5'
                  color={Colors.secondary_color_1}
                  fontSize="24px"
                  lineHeight="32px"
                  letterSpacing="0.1px"
                  textAlign="center"
                  padding="15px"
                >
                  $16.48
                </TypographyStyled>
              </Box>
              <Box>
                <Button variant='contained' style={{ padding: "15px 40px" }}>
                  <TypographyStyled variant='body1'
                    color={Colors.white}
                    lineHeight="22px"
                    textAlign="center"
                  >
                    ADD YOUR CALL TO ACTION
                  </TypographyStyled>
                </Button>
              </Box>
            {/* </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Cta