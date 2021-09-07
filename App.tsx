import React from 'react'
import { StyleSheet } from 'react-native'
import RootScreen from '@screens/RootScreen'
import { PhoneContextProvider } from '@contexts/PhoneContext'
// import { PhoneContextProvider } from '@src/contexts/PhoneContext'

export default function App() {
  // const isSignedIn = true

  return (
    <PhoneContextProvider>
      <RootScreen />
    </PhoneContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
