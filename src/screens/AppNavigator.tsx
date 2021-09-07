import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator } from '@screens/Home/HomeNavigator'
import { OMSNavigator } from '@screens/OMS/OMSNavigator'
import { ProfileNavigator } from '@screens/Profile/ProfileNavigator'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="OMS" component={OMSNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default AppNavigator
