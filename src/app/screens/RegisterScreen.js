import { AsyncStorage, Button, Text, View } from 'react-native'

import { Application } from '../components/Application'
import React from 'react'

export class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }

    render() {
        const { navigate } = this.props.navigation
        let action = () => {
            navigate('MainDrawerNavigator')
        }
        return (
            <View style={{ backgroundColor: '#e5e5e5', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 30 }}>Register Screen.</Text>
                <Button title="Go to Application." onPress={action} color="#090909" />
            </View>
        )
    }
}