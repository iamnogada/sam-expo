import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OneScreen } from './OneScreen'
import { ThreeScreen } from './ThreeScreen'
import { TwoScreen } from './TwoScreen'
import { useRoute } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export const ProfileNavigator = () => {
  const route = useRoute()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="One"
        component={OneScreen}
        initialParams={{ tabName: route.name }}
      />
      <Stack.Screen
        name="Two"
        component={TwoScreen}
        initialParams={{ tabName: route.name }}
      />
      <Stack.Screen
        name="Three"
        component={ThreeScreen}
        initialParams={{ tabName: route.name }}
      />
    </Stack.Navigator>
  )
}
