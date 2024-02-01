"use client"

import { Box, Grid } from '@mui/material'
import React from 'react'
import { AppBarHeader, BadgeCountLabel, HeaderItemText, HeaderWrapper, ListItemIconBar, ListItemTopBarLabel, TopBarButtonList, TopBarMediaIcon } from './Header.style';
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
import { HeaderDarkStyled, HeaderLightStyled } from './Header.style';
import { Colors } from '@/theme/colors';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderDarkStyled>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item display='flex' gap={1}>
            <ListItemIconBar
              padding="10px"
            >
              <PhoneSmIcon />
              <ListItemTopBarLabel>
                (225) 555-0118
              </ListItemTopBarLabel>
            </ListItemIconBar>
            <ListItemIconBar
              padding="10px"
            >
              <MailSmIcon />
              <ListItemTopBarLabel>
                michelle.rivera@example.com
              </ListItemTopBarLabel>
            </ListItemIconBar>
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
      </HeaderDarkStyled>
      <HeaderLightStyled>
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

        <TopBarButtonList type='row' align='right'>
          <ListItemIconBar>
            <UserSmIcon />
            <HeaderItemText variant='body1'
              color={Colors.primary}
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
      </HeaderLightStyled>
    </HeaderWrapper>
  )
}

export default Header