import { Application } from './components/Application'
import { ApplicationReducer } from './reducers/ApplicationReducer'
import { Provider } from 'react-redux'
import React from 'react'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'

export class App extends React.Component {
    store = createStore(ApplicationReducer)
    render() {
        return (
            <Provider store={this.store}>
                <Application />
            </Provider>
        )
    }
}