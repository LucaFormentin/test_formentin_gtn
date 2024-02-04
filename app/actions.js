export const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return data
}

const findUserByEmail = async (email) => {
  const users = await getAllUsers()
  const user = users.find(user => user.email === email || null)

  return user
}

export const login = async loginData => {
  const existingUser = await findUserByEmail(loginData.email)

  if (!existingUser) throw new Error('No user founded with this email...')

  return existingUser
}
