'use client'

import { useLoggedUserContext } from '@/app/context/LoggedUserContextProvider'
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  MenuRounded,
} from '@mui/icons-material'
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import AccountMenu from './AccountMenu'
import { useState } from 'react'
import { AppBar, DrawerHeader, Main, drawerWidth } from '@/style/styledElements'
import { useDrawerContext } from '@/app/context/DrawerContextProvider'

const Header = () => {
  const { user } = useLoggedUserContext()
  const [openDrawer, setOpenDrawer] = useState(false)
  const { setOpen } = useDrawerContext()
  const theme = useTheme()

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setOpen(false)
  }

  return (
    <>
      <AppBar position='static' open={openDrawer}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            sx={{ ...(openDrawer && { display: 'none' }) }}
          >
            <MenuRounded />
          </IconButton>
          <Typography variant='h6'>Test Formentin</Typography>
          <AccountMenu username={user.username} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftRounded />
            ) : (
              <ChevronRightRounded />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={'Anagrafica'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
