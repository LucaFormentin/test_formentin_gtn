'use client'

const { createContext, useContext, useState } = require('react')

const DrawerContext = createContext({})

export const DrawerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawerContext = () => useContext(DrawerContext)
