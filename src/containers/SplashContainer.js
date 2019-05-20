import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, FlatList, ImageBackground, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../components/header/Header';
// global resources
import {AppStyles, ActionTypes, HeaderUtils, Images, Utils} from '../configs/appConfig';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';
import {Card} from "native-base";

class SplashContainer extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 'This is test text',

        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        if (props.loginReducer.testLifeCycle.value !== state.value) {
            return {
                value: props.loginReducer.testLifeCycle.value
            }
        }

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.value !== nextState.value)
            return true;
        return false;
    }

    onTest = () => {
        this.props.dispatch({
            type: ActionTypes.TEST_LIFE_CYCLE,
            value: 'test',
            id: 1
        })
    };

    componentDidMount() {
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.load();
        }, 2000);
    }

    load = () => {
        this.props.navigation.navigate("RegisterContainer");
    };


    render() {
        console.log('myData', this.state.myData);
        return (
            <ImageBackground source={Images.ic_bg} style={styles.container}/>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(SplashContainer);
