import Header from '@/components/Home/Header'

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HomeLayout
