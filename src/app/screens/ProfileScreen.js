import { Text, View } from 'react-native'

import { MenuButton } from '../components/MenuButton'
import React from 'react'

export class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerLeft: <MenuButton navigation={navigation} />
    })
    render() {
        return (
            <View style={{ backgroundColor: '#e5e5e5', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Profile Screen.</Text>
            </View>
        )
    }
}