import { Image, TouchableOpacity } from 'react-native'

import React from 'react'

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ paddingLeft: 15, flex: 1, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Image source={require('../assets/png/menu-button.png')} style={{ height: 20, width: 20, alignSelf: 'center' }} />
            </TouchableOpacity>
        )
    }
}