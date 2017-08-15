import { AppRegistry, Button, Image, Text, TouchableOpacity, View } from 'react-native'

import { MainDrawerNavigator } from '../navigators/MainDrawerNavigator'
import { MenuButton } from '../components/MenuButton'
import React from 'react'

export class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: <MenuButton navigation={navigation} />
    })

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ backgroundColor: '#e5e5e5', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 30 }}>Wellcome to HomeScreen.</Text>
                <Button title="See Options" onPress={() => navigate('secondHomeItem')} color="#090909" />
            </View>
        )
    }
}