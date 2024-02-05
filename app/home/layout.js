import Header from '@/components/Home/Header'
import { DrawerContextProvider } from '../context/DrawerContextProvider'

const HomeLayout = ({ children }) => {
  return (
    <DrawerContextProvider>
      <Header />
      {children}
    </DrawerContextProvider>
  )
}

export default HomeLayout
