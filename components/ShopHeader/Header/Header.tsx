"use client"

import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles";
import { Colors } from "@/theme/theme";
import style from "./Header.module.css"
import { ExpandMore, FavoriteBorder, Person, Search, ShoppingCart } from "@mui/icons-material";
import { AppBarHeader, BadgeCountLabel, HeaderItemText, HeaderWrapper, ListItemIconBar, ListItemTopBar, ListItemTopBarLabel, TopBarButtonList, TopBarMediaIcon } from '@/styles/appbar/appbar';
import { HeaderItem } from './HeaderItem';
import CaretDownIcon from '@/components/icons/CaretDownIcon';
import UserSmIcon from '@/components/icons/UserSmIcon';
import SearchSmIcon from '@/components/icons/SearchSmIcon';
import BasketSmIcon from '@/components/icons/BasketSmIcon';
import HeartSmIcon from '@/components/icons/HeartSmIcon';
import PhoneSmIcon from '@/components/icons/PhoneSmIcon';
import MailSmIcon from '@/components/icons/MailSmIcon';
import InstagramSmIcon from '@/components/icons/InstagramSmIcon';
import YoutubeSmIcon from '@/components/icons/YoutubeSmIcon';
import FacebookSmIcon from '@/components/icons/FacebookSmIcon';
import TwitterSmIcon from '@/components/icons/TwitterSmIcon';

export const HeaderDark = styled(Box)(() => ({
  height: "58px",
  backgroundColor: "#23856D",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 24px"
}));

export const HeaderLight = styled(Box)(() => ({
  display: "flex",
  height: "58px",
  padding: "0px 17px 0px 38px",
  // justifyContent: "flex-end",
  alignItems: "center",
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
    <HeaderWrapper>
      <HeaderDark>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item display='flex' gap={1}>
            <ListItemTopBar>
              <PhoneSmIcon />
              <ListItemTopBarLabel>
                (225) 555-0118
              </ListItemTopBarLabel>
            </ListItemTopBar>
            <ListItemTopBar>
              <MailSmIcon />
              <ListItemTopBarLabel>
                michelle.rivera@example.com
              </ListItemTopBarLabel>
            </ListItemTopBar>
          </Grid>
          <Grid item>
            <ListItemTopBarLabel>
              Follow Us  and get a chance to win 80% off
            </ListItemTopBarLabel>
          </Grid>
          <Grid item display="flex" alignItems="center">
           <ListItemTopBarLabel>
              Follow Us  :
            </ListItemTopBarLabel>
            <Box display="flex" alignItems="center">
              <TopBarMediaIcon>
                <InstagramSmIcon />
              </TopBarMediaIcon>
              <TopBarMediaIcon>
                <YoutubeSmIcon />
              </TopBarMediaIcon>
              <TopBarMediaIcon>
                <FacebookSmIcon />
              </TopBarMediaIcon>
              <TopBarMediaIcon>
                <TwitterSmIcon />
              </TopBarMediaIcon>
            </Box>
          </Grid>
        </Grid>
      </HeaderDark>
      <HeaderLight>
        <AppBarHeader>
          Bandage
        </AppBarHeader>
        <TopBarButtonList type='row'>
          <HeaderItem>
            Home
          </HeaderItem>
          <HeaderItem icon={<CaretDownIcon />}>
            Shop
          </HeaderItem>
          <HeaderItem>
            About
          </HeaderItem>
          <HeaderItem>
            Blog
          </HeaderItem>
          <HeaderItem>
            Contact
          </HeaderItem>
          <HeaderItem>
            Pages
          </HeaderItem>
        </TopBarButtonList>

        <TopBarButtonList type='row' alignItem='right'>
          <ListItemIconBar>
            <UserSmIcon />
            <HeaderItemText variant='body1'
              sx={{
                color: "#23A6F0"
              }}
            >
              Login / Register
            </HeaderItemText>
          </ListItemIconBar>
          <ListItemIconBar>
            <SearchSmIcon />
          </ListItemIconBar>
          <ListItemIconBar>
            <BasketSmIcon />
            <BadgeCountLabel>
              1
            </BadgeCountLabel>
          </ListItemIconBar>
          <ListItemIconBar>
            <HeartSmIcon />
            <BadgeCountLabel>
              1
            </BadgeCountLabel>
          </ListItemIconBar>
        </TopBarButtonList>
      </HeaderLight>
    </HeaderWrapper>
  )
}

export default Header