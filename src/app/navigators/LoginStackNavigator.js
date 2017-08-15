import { AppRegistry } from 'react-native'
import { LoginScreen } from '../screens/LoginScreen'
import { MainDrawerNavigator } from './MainDrawerNavigator'
import { RegisterScreen } from '../screens/RegisterScreen'
import { StackNavigator } from 'react-navigation'

export const LoginStackNavigator = StackNavigator({
    firstLoginItem: {
        screen: LoginScreen
    },
    secondLoginItem: {
        screen: RegisterScreen
    }
})