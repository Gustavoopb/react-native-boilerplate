import { ProfileScreen } from '../screens/ProfileScreen'
import React from 'react'
import { StackNavigator } from 'react-navigation'

export const ProfileStackNavigator = StackNavigator({
    firstProfileItem: {
        screen: ProfileScreen
    }
})