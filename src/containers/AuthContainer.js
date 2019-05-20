import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';
import { Storage } from '../configs/appConfig';

// global resources
import {AppStyles} from '../configs/appConfig';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';

class AuthContainer extends Component {
    constructor(props) {
        super(props);
        this._isLogin()
    }

    _isLogin = async () => {
        let userToken = null;
        Storage.getData('userToken').then(user => userToken = user);
        console.log('_isLogin', userToken);
        this.props.navigation.navigate(userToken ? 'MainNavigator' : 'AppNavigator');
    };

    render() {
        return (
            <ExtContainer>
                <View style={styles.container}>
                    <Text style={[AppStyles.fontTitle]}>Auth screen</Text>
                </View>

            </ExtContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(AuthContainer);
