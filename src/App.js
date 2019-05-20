import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import Store from './configs/store';
import AppNavigator from './navigation/AppNavigator';
import TabNavigator from './navigation/TabNavigator';
import AuthContainer from './containers/AuthContainer';

const AppContainer = createAppContainer(createSwitchNavigator({
        AppNavigator: AppNavigator,
        TabNavigator: TabNavigator,
        AuthContainer: AuthContainer,
    }, {
        initialRouteName: 'AuthContainer',
    }
));

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <AppContainer/>
            </Provider>
        );
    }
}