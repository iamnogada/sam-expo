import React, { useCallback } from 'react'
import { Text, View, Button, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  CompositeScreenProps,
  CompositeNavigationProp,
} from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import {
  RootStackParamList,
  HomeStackParamList,
} from '@screens/RootStackParamList'

type ScreenProp = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, 'Home'>,
  NativeStackScreenProps<HomeStackParamList, 'One'>
>

type NavigationProp = ScreenProp['navigation']
type MyRouteProp = RouteProp<HomeStackParamList, 'One'>
// type NavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<RootStackParamList, 'Home'>,
//   StackNavigationProp<HomeStackParamList, 'One'>
// >

export const OneScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const route = useRoute<MyRouteProp>()
  console.log(JSON.stringify(route))

  const go = useCallback(() => {
    navigation.navigate('Home', { screen: 'One' })
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>{`${route.params?.tabName}-${route.name}`}</Text>
        <Button title="Go Home one !!" onPress={() => go()} />
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
