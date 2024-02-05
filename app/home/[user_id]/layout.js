'use client'

import { useDrawerContext } from '@/app/context/DrawerContextProvider'
import { Main } from '@/style/styledElements'

const LoggedUserLayout = ({ children }) => {
  const { open } = useDrawerContext()

  return <Main open={!open}>{children}</Main>
}

export default LoggedUserLayout
