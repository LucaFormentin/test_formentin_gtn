import Loading from '@/app/loading'
import Home from '@/components/Home'
import { Suspense } from 'react'

const HomePage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  )
}

export default HomePage
