"use client"

import { AppBar, Backdrop, Box, Button, Fade, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Slide, Slider, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material'
import React, { useRef } from 'react'
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
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Add, Delete, Inbox, Menu, Remove } from '@mui/icons-material';
import Link from 'next/link';
import { TypographyStyled } from '@/styles/Typography.style';
import CartModal from './CartModal';
import WishlistModal from './WishlistModal';
import LoginModal from './LoginModal';
import BurgerMenuSmIcon from '@/components/icons/BurgerMenuSmIcon';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const cartModalRef = useRef<{ show: () => void }>(null);
  const wishlistModalRef = useRef<{ show: () => void }>(null);
  const loginModalRef = useRef<{ show: () => void }>(null);
  const cartCounter = useSelector((state: RootState) => state.product.cartCounter)
  const whishListCounter = useSelector((state: RootState) => state.product.wishlistCounter)
  // const cartList = useSelector((state: RootState) => state.product.cartList)
  // console.log('cartList', cartList)
  const [toggleMenu, setToggleMenu] = React.useState(true);
  const handleOpen = () => {
    cartModalRef.current?.show();
  };

  const handleOpenWishlistModal = () => {
    wishlistModalRef.current?.show();
  };

  const handleOpenLoginModal = () => {
    loginModalRef.current?.show();
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  React.useEffect(() => {
    setToggleMenu(isMobile ? false : true)
  }, [isMobile])

  const MenuContent = () => {
    return (
      <>
        <TopBarButtonList type='row'
          sx={(theme) => ({
            background: "white",
            [theme.breakpoints.down("md")]: {
              display: "block"
            }
          })}
        >
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

        <TopBarButtonList type='row' align='right'
          sx={(theme) => ({
            background: "white",
            [theme.breakpoints.down("md")]: {
              display: "inline-block"
            }
          })}
        >
          <ListItemIconBar
            onClick={handleOpenLoginModal}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                padding: "10px"
              }
            })}
          >
            <UserSmIcon />
            <HeaderItemText variant='body1'
              color={Colors.primary}
            >
              Login / Register
            </HeaderItemText>
          </ListItemIconBar>
          <ListItemIconBar
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                padding: "10px"
              }
            })}
          >
            <SearchSmIcon />
          </ListItemIconBar>
          <ListItemIconBar
            onClick={handleOpen}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                padding: "10px"
              }
            })}
          >
            <BasketSmIcon />
            <BadgeCountLabel>
              {cartCounter}
            </BadgeCountLabel>
          </ListItemIconBar>
          <ListItemIconBar
            onClick={handleOpenWishlistModal}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                padding: "10px"
              }
            })}
          >
            <HeartSmIcon />
            <BadgeCountLabel>
              {whishListCounter}
            </BadgeCountLabel>
          </ListItemIconBar>
        </TopBarButtonList>
      </>
    )
  }

  return (
    <>
      {/* <HeaderWrapper>
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
                  <Link href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <InstagramSmIcon />
                  </Link>
                </TopBarMediaIcon>
                <TopBarMediaIcon>
                  <Link href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <YoutubeSmIcon />
                  </Link>
                </TopBarMediaIcon>
                <TopBarMediaIcon>
                  <Link href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FacebookSmIcon />
                  </Link>
                </TopBarMediaIcon>
                <TopBarMediaIcon>
                  <Link href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <TwitterSmIcon />
                  </Link>
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
            <ListItemIconBar
              onClick={handleOpenLoginModal}
            >
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
            <ListItemIconBar
              onClick={handleOpen}
            >
              <BasketSmIcon />
              <BadgeCountLabel>
                {cartCounter}
              </BadgeCountLabel>
            </ListItemIconBar>
            <ListItemIconBar
              onClick={handleOpenWishlistModal}
            >
              <HeartSmIcon />
              <BadgeCountLabel>
                {whishListCounter}
              </BadgeCountLabel>
            </ListItemIconBar>
          </TopBarButtonList>
        </HeaderLightStyled>
      </HeaderWrapper> */}

      <AppBar component="nav"
        position="static"
        sx={{
          background: Colors.white,
          boxShadow: "none"
        }}
      >
        <Toolbar sx={{
          padding: "0 !important",
        }}>
          <HeaderWrapper sx={{
            width: "100%"
          }}>
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
                <Grid item
                  sx={(theme) => ({
                    [theme.breakpoints.down("lg")]: {
                      display: "none"
                    }
                  })}
                >
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
                      <Link href="#"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InstagramSmIcon />
                      </Link>
                    </TopBarMediaIcon>
                    <TopBarMediaIcon>
                      <Link href="#"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <YoutubeSmIcon />
                      </Link>
                    </TopBarMediaIcon>
                    <TopBarMediaIcon>
                      <Link href="#"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FacebookSmIcon />
                      </Link>
                    </TopBarMediaIcon>
                    <TopBarMediaIcon>
                      <Link href="#"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <TwitterSmIcon />
                      </Link>
                    </TopBarMediaIcon>
                  </Box>
                </Grid>
              </Grid>
            </HeaderDarkStyled>
            <HeaderLightStyled
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  background: "white",
                  zIndex: "2",
                  gap: 0,
                  padding: "0",
                }
              })}
            >
              <AppBarHeader
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    padding: "25px 20px",
                  }
                })}
              >
                Bandage
                <Button
                  onClick={handleToggleMenu}
                  sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                      display: "none"
                    }
                  })}
                >
                  <BurgerMenuSmIcon />
                </Button>
              </AppBarHeader>
              {!isMobile && (
                <MenuContent />
              )}
              {isMobile && toggleMenu && (
                <MenuContent />
              )}
            </HeaderLightStyled>
          </HeaderWrapper>
        </Toolbar>
      </AppBar>

      <CartModal ref={cartModalRef} />
      <WishlistModal ref={wishlistModalRef} />
      <LoginModal ref={loginModalRef} />
    </>
  )
}

export default Header