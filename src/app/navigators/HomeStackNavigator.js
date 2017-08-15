import { HomeScreen } from '../screens/HomeScreen'
import { OptionsScreen } from '../screens/OptionsScreen'
import React from 'react'
import { StackNavigator } from 'react-navigation'

export const HomeStackNavigator = StackNavigator({
    firstHomeItem: {
        screen: HomeScreen
    },
    secondHomeItem: {
        screen: OptionsScreen
    }
})