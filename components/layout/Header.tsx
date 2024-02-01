"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from "./Header.module.css";
import { Grid } from '@mui/material';
import { Colors } from '@/theme/colors';

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
                  color: Colors.white
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
