'use client'

import { useLoggedUserContext } from '@/app/context/LoggedUserContextProvider'
import { MenuRounded } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import AccountMenu from './AccountMenu'

const Header = () => {
  const { user } = useLoggedUserContext()

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <MenuRounded />
        </IconButton>
        <Typography variant='h6'>Test Formentin</Typography>
        <AccountMenu username={user.username} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
