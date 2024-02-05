'use client'

import { useLoggedUserContext } from '@/app/context/LoggedUserContextProvider'
import { MenuRounded } from '@mui/icons-material'
import { IconButton, Toolbar, Typography } from '@mui/material'
import AccountMenu from './AccountMenu'
import { useState } from 'react'
import { AppBar } from '@/style/styledElements'
import { useDrawerContext } from '@/app/context/DrawerContextProvider'
import Drawer from '../Drawer'

const Header = () => {
  const { user } = useLoggedUserContext()
  const [openDrawer, setOpenDrawer] = useState(false)
  const { setOpen } = useDrawerContext()

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
      <Drawer open={openDrawer} onClose={handleDrawerClose}/>
    </>
  )
}

export default Header
