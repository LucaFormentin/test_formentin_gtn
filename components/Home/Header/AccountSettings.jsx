import { ListItemIcon, Menu, MenuItem } from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import Link from 'next/link'
import toast from 'react-hot-toast'

const AccountSettings = (props) => {
  const { anchor, open, close } = props

  return (
    <Menu
      anchorEl={anchor}
      open={open}
      onClose={close}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Link
          href='/'
          className='flex items-center'
          onClick={() => toast.success('Logged out!')}
        >
          <ListItemIcon>
            <LogoutRoundedIcon fontSize='small' />
          </ListItemIcon>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  )
}

export default AccountSettings
