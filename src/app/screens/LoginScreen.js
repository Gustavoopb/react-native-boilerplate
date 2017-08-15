import { AsyncStorage, Button, Text, View } from 'react-native'

import { Application } from '../components/Application'
import React from 'react'
import { connect } from 'react-redux';

class LoginScreenComponent extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }

    render() {
        const { navigate } = this.props.navigation
        let action = () => {
            navigate('secondLoginItem')
        }
        return (
            <View style={{ backgroundColor: '#e5e5e5', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 30 }}>Login Screen.</Text>
                <Button title="Go to Register" onPress={this.props.login} color="#090909" />
            </View>
        )
    }
}

const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn });

const mapLoginScreenDispatchToProps = dispatch => ({ login: () => dispatch({ type: 'Login' }) })

export const LoginScreen = connect(() => ({}), mapLoginScreenDispatchToProps)(LoginScreenComponent);