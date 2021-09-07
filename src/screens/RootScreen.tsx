import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './AppNavigator'
import LoginNavigator from './LoginNavigator'
import SplashNavigator from './SplashNavigator'
import { PhoneContext } from '@contexts/PhoneContext'

const RootScreen = () => {
  const isFirstTimeRun = false
  const { localState } = useContext(PhoneContext)
  console.log(localState)

  const isLogin = true //localState.isLogin
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isFirstTimeRun ? (
          <SplashNavigator />
        ) : localState.isLogin ? (
          <AppNavigator />
        ) : (
          <LoginNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default RootScreen
