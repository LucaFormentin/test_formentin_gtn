'use client'

import { MenuRounded } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import toast from 'react-hot-toast'

const Header = () => {
  const logout = () => toast.success('Logged out!')

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <MenuRounded />
        </IconButton>
        <Typography variant='h6'>Test Formentin</Typography>
        <Button variant='contained' className='ml-auto' href={'/'} onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
