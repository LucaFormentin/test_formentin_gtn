import { DrawerContextProvider } from '../context/DrawerContextProvider'

const HomeLayout = ({ children }) => {
  return (
    <DrawerContextProvider>
      {children}
    </DrawerContextProvider>
  )
}

export default HomeLayout
