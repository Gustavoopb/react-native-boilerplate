import { LoginStackNavigator } from '../navigators/LoginStackNavigator'
import { MainDrawerNavigator } from '../navigators/MainDrawerNavigator'
import React from 'react'
import { connect } from 'react-redux';

class ApplicationComponent extends React.Component {
    render() {
        let isLoggedIn;
        if (this.props.isLoggedIn)
            return <MainDrawerNavigator />
        return <LoginStackNavigator />
    }
}

const mapApplicationProps = state => ({ isLoggedIn: state.auth.isLoggedIn })

export const Application = connect(mapApplicationProps)(ApplicationComponent);