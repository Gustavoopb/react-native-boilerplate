import { DrawerNavigator } from 'react-navigation'
import { HomeStackNavigator } from './HomeStackNavigator'
import { ProfileStackNavigator } from './ProfileStackNavigator'
import React from 'react'

const MainDrawerNavigatorComponent = DrawerNavigator({
    firstDrawerItem: {
        screen: HomeStackNavigator
    },
    secondDrawerItem: {
        screen: ProfileStackNavigator
    }
})

export const MainDrawerNavigator = () => <MainDrawerNavigatorComponent />