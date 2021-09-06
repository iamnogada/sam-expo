import { CompositeScreenProps } from '@react-navigation/core'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native'

export type HomeStackParamList = {
  One: { tabName: string } | undefined
  Two: { tabName: string } | undefined
  Three: { tabName: string } | undefined
}
export type OMSStackParamList = {
  One: { tabName: string } | undefined
  Two: { tabName: string } | undefined
  Three: { tabName: string } | undefined
}
export type ProfileStackParamList = {
  One: { tabName: string } | undefined
  Two: { tabName: string } | undefined
  Three: { tabName: string } | undefined
}
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>
  OMS: NavigatorScreenParams<OMSStackParamList>
  Profile: NavigatorScreenParams<ProfileStackParamList>
}

// export type RootStackParamLust = CompositeScreenProps<BottomTabNavigationProp<>>
