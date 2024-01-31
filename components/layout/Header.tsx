"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styles from "./Header.module.css";
import { Grid } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import PhoneOutlined from "@mui/icons-material/PhoneOutlined"
import { ReactComponent as PhoneIcon } from "@/public/images/icons/phone.svg";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  return (
    <Box className={styles.navbarMain}>
      <Box className={styles.navbarDark}>
        <Box className={styles.navbarCollapse}>
          <Grid container>
            <Grid item lg={4}>
              <Button variant='text'
                sx={{
                  color: "white"
                }}
              >
                {/* <SvgIcon component={PhoneIcon} viewBox="0 0 24 24">
                </SvgIcon> */}
                (225) 555-0118
              </Button>
            </Grid>
            <Grid item lg={4}>
              <h1>Col 2</h1>
            </Grid>
            <Grid item lg={4}>
              <h1>Col 3</h1>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.navbarLight}>
        <h1>dark</h1>
      </Box>
    </Box>
  );
}
export default Header;
