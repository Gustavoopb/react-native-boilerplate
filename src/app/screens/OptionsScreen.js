import { Text, View } from 'react-native'

import React from 'react'

export class OptionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Options'
    }
    render() {
        return (
            <View style={{ backgroundColor: '#e5e5e5', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Options Screen.</Text>
            </View>
        )
    }
}