'use client'

const { createContext, useContext, useState } = require('react')

const LoggedUserContext = createContext({})

export const LoggedUserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <LoggedUserContext.Provider value={{ user, setUser }}>
      {children}
    </LoggedUserContext.Provider>
  )
}

export const useLoggedUserContext = () => useContext(LoggedUserContext)
