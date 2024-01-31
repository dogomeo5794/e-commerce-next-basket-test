"use client"

import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles";
import { Colors } from "@/theme/theme";
import style from "./Header.module.css"
import { ExpandMore, FavoriteBorder, Person, Search, ShoppingCart } from "@mui/icons-material";

export const HeaderDark = styled(Box)(() => ({
  height: "58px",
  backgroundColor: "#23856D",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const HeaderLight = styled(Box)(() => ({
  display: "flex",
  height: "58px",
  padding: "0px 17px 0px 38px",
  // justifyContent: "flex-end",
  alignItems: "flex-start",
  gap: "40px",
}));

export const Brand = styled(Typography)(() => ({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "32px",
  letterSpacing: "0.1px",
}));

function Header() {
  return (
    <>
      <HeaderDark>
        <Grid container justifyContent="space-between">
          <Grid item>
            Item 1
          </Grid>
          <Grid item>
            Item 2
          </Grid>
          <Grid item>
            Item 3
          </Grid>
        </Grid>
      </HeaderDark>
      <HeaderLight>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Brand>
            Bandage
          </Brand>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Button className={style.textTransformNone}>
                Home
              </Button>
              <Button className={style.textTransformNone}
                endIcon={<ExpandMore />}
              >
                Shop
              </Button>
              <Button className={style.textTransformNone}>
                About
              </Button>
              <Button className={style.textTransformNone}>
                Blog
              </Button>
              <Button className={style.textTransformNone}>
                Contact
              </Button>
              <Button className={style.textTransformNone}>
                Pages
              </Button>
            </Box>
            <Box>
              <Button className={style.textTransformNone}
                startIcon={<Person />}
              >
                Login / Register
              </Button>
              <Button className={style.textTransformNone}
                startIcon={<Search />}
                variant='text'
              >
                1
              </Button>
              <IconButton aria-label="Search">
                <Search />
              </IconButton>
              <IconButton aria-label="ShoppingCart">
                <ShoppingCart />
                1
              </IconButton>
              <IconButton aria-label="FavoriteBorder">
                <FavoriteBorder />
                1
              </IconButton>
            </Box>
          </Box>
        </Box>
      </HeaderLight>
    </>
  )
}

export default Header