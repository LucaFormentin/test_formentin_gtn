import { useLoggedUserContext } from '@/app/context/LoggedUserContextProvider'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DrawerListItems = () => {
  const { user } = useLoggedUserContext()
  const pathname = usePathname()
  const basepath = `/home/${user.id}`

  const listItemsData = [
    { label: 'Home', href: basepath },
    { label: 'Anagrafica', href: `${basepath}/anagrafica` },
  ]

  const listItems = listItemsData.map((item, index) => {
    const isActive = pathname === item.href
    const activeStyle = 'bg-blue-900'

    return (
      <ListItem key={index}>
        <Link href={item.href} className={`w-full rounded-md hover:bg-blue-900/40 hover:scale-105 ${isActive && activeStyle}`}>
          <ListItemButton>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </Link>
      </ListItem>
    )
  })

  return <List>{listItems}</List>
}

export default DrawerListItems
