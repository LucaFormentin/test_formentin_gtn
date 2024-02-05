import { StyledBadge } from '@/style/theme'
import { Avatar, IconButton } from '@mui/material'
import AccountSettings from './AccountSettings'
import { useState } from 'react'

const StyledAvatar = ({ username }) => {
  return (
    <StyledBadge
      overlap='circular'
      variant='dot'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Avatar className='ring ring-blue-600 ring-offset-2 ring-offset-zinc-900 font-semibold'>
        {username.trim().slice(0, 2).toUpperCase()}
      </Avatar>
    </StyledBadge>
  )
}

const AccountMenu = ({ username }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <div className='flex ml-auto'>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <StyledAvatar username={username} />
      </IconButton>
      <AccountSettings
        anchor={anchorEl}
        open={!!anchorEl}
        close={() => setAnchorEl(null)}
      />
    </div>
  )
}

export default AccountMenu
