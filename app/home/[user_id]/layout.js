'use client'

import { useDrawerContext } from '@/app/context/DrawerContextProvider'
import Header from '@/components/Home/Header'
import { Main } from '@/style/styledElements'

const LoggedUserLayout = ({ children }) => {
  const { open } = useDrawerContext()

  return (
    <>
      <Header />
      <Main open={!open}>{children}</Main>
    </>
  )
}

export default LoggedUserLayout
