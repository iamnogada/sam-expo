import React, { createContext } from 'react'

export const GlobalContext = createContext({})

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContext.Provider value={}>{children}</GlobalContext.Provider>
}

export default GlobalContextProvider
