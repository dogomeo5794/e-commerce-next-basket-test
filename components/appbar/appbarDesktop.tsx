import { AppBarContainer, AppBarHeader, MyList } from '@/styles/appbar/appbar'
import { ListItemText } from '@mui/material'
import React from 'react'

function AppBarDesktop({ matches }) {
  return (
    <AppBarContainer>
        <AppBarHeader>Bandage</AppBarHeader>
        <MyList className='row'>
            <ListItemText primary="Home" />
            <ListItemText primary="Shop" />
            <ListItemText primary="About" />
            <ListItemText primary="Blog" />
            <ListItemText primary="Contact" />
            <ListItemText primary="Pages" />
        </MyList>
    </AppBarContainer>
  )
}

export default AppBarDesktop