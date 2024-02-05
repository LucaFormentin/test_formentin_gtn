import { DrawerHeader, drawerWidth } from '@/style/styledElements'
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import {
  Divider,
  IconButton,
  Drawer as MuiDrawer,
  useTheme,
} from '@mui/material'
import DrawerListItems from './DrawerListItems'

const Drawer = (props) => {
  const { open, onClose } = props
  const theme = useTheme()

  return (
    <MuiDrawer
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
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftRounded />
          ) : (
            <ChevronRightRounded />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerListItems />
    </MuiDrawer>
  )
}

export default Drawer
