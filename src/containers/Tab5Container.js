import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';

class Tab5Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExtContainer ref={ref => (this.container = ref)}>
                <View style={styles.container}>
                <Text>Tab 5</Text>
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

export default connect(mapStateToProps)(Tab5Container);
