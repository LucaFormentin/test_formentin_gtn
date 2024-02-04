import { getAllUsers } from '@/app/actions'

export const getUserInfo = async userId => {
  const users = await getAllUsers()
  const existingUser = users.find(user => user.id === +userId)

  return existingUser
}
