import Home from '@/components/Home'
import { getUserInfo } from './actions'

const HomePage = async ({ params }) => {
  const { user_id } = params

  const info = await getUserInfo(user_id)

  return <Home userInfo={info} />
}

export default HomePage
