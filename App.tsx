import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from '@screens/AppNavigator'
import SplashNavigator from '@screens/SplashNavigator'
import LoginNavigator from '@screens/LoginNavigator'

export default function App() {
  const isFirstTimeRun = false
  const isSignedIn = true
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isFirstTimeRun ? (
          <SplashNavigator />
        ) : isSignedIn ? (
          <AppNavigator />
        ) : (
          <LoginNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
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
