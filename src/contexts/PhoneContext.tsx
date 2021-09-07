import React, { createContext, useReducer } from 'react'
import { LocalState, LocalUserAction } from '@constants/localState'
import { LocalUserReducer } from '@reducers/LocalUserReducer'

const initialState: LocalState = {
  isLogin: false,
  currentUser: {
    id: 'nogada',
    displayName: '한승일',
    expireDate: new Date('2021-09-10 00:00:00'),
  },
}

export const PhoneContext = createContext<{
  localState: LocalState
  dispatchLocalState: React.Dispatch<LocalUserAction>
}>({
  localState: initialState,
  dispatchLocalState: () => undefined,
})

export const PhoneContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [localState, dispatchLocalState] = useReducer(
    LocalUserReducer,
    initialState
  )
  return (
    <PhoneContext.Provider value={{ localState, dispatchLocalState }}>
      {children}
    </PhoneContext.Provider>
  )
}
