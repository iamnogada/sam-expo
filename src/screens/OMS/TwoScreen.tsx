import React from 'react'
import { Text, View, Button, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'

import {
  RootStackParamList,
  OMSStackParamList,
} from '@screens/RootStackParamList'

type ScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'OMS'>,
  StackNavigationProp<OMSStackParamList, 'Two'>
>

export const TwoScreen = () => {
  const navigation = useNavigation<ScreenProp>()
  return (
    <SafeAreaView>
      <View>
        <Text>OMS Two!</Text>
        <Button
          title="Go Home one !!"
          onPress={() => navigation.navigate('Home', { screen: 'One' })}
        />
        <Button
          title="Go Home Two !!"
          onPress={() => navigation.navigate('Home', { screen: 'Two' })}
        />
        <Button
          title="Go Home Three !!"
          onPress={() => navigation.navigate('Home', { screen: 'Three' })}
        />
        <Button
          title="Go OMS one !!"
          onPress={() => navigation.navigate('OMS', { screen: 'One' })}
        />
        <Button
          title="Go OMS Two !!"
          onPress={() => navigation.navigate('OMS', { screen: 'Two' })}
        />
        <Button
          title="Go OMS Three !!"
          onPress={() => navigation.navigate('OMS', { screen: 'Three' })}
        />
      </View>
    </SafeAreaView>
  )
}
