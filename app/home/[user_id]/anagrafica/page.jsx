import Loading from '@/app/loading'
import { Typography } from '@mui/material'
import { Suspense } from 'react'

const AnagraficaPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Typography variant='h4'>Anagrafica</Typography>
      <span>This is a dummy page just for testing the application.</span>
    </Suspense>
  )
}

export default AnagraficaPage
