'use client'

import { useLoggedUserContext } from '@/app/context/LoggedUserContextProvider'
import { Alert, AlertTitle, Typography } from '@mui/material'

const Home = () => {
  const { user } = useLoggedUserContext()

  if (Object.keys(user).length === 0)
    return (
      <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        Seems you are not logged correctly in! Please logout and retry...
      </Alert>
    )

  return (
    <div className='flex flex-col gap-10'>
      <Typography variant='h4'>Welcome {user.name}!</Typography>
      <Alert severity='info'>
        <AlertTitle>Info</AlertTitle>
        Open the menu and select a page to navigate to!
      </Alert>
    </div>
  )
}

export default Home
