import React, {Component} from 'react';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, Card, Button} from 'native-base';
import {StyleSheet, View, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native';
import TextInputBase from '../components/inputtext/TextInputBase.js';
import {AppStyles, ActionTypes, HeaderUtils, Images, Utils, I18n} from '../configs/appConfig';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';

class RegisterContainer extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '', password: ''
        }
    }

    directLogin = () => {
        if (Utils.isNullOrUndefined(this.state.email)
            && Utils.isNullOrUndefined(this.state.password)) {
            return
        }
        this.props.navigation.navigate('LoginContainer')
    }


    _storeData = async () => {
        try {
            await AsyncStorage.setItem('email', this.state.email);
            await AsyncStorage.setItem('pass', this.state.password);
        } catch (error) {
            // Error saving data
        }
    };

    render() {
        //console.log('passing param', this.props.navigation.state.params());
        const {email, password} = this.state;

        return (
            <ExtContainer>
                <ImageBackground source={Images.ic_bg} style={styles.container}>
                    <View>
                        <View style={{alignSelf: 'flex-start'}}>
                            <Text style={styles.lbText}>{I18n.t('signUp')}</Text>
                            <Text style={[styles.styleWelcome, {
                                color: '#333333',
                                marginLeft: 40,
                                fontWeight: 'normal'
                            }]}>{I18n.t('emailAndPassword')}</Text>
                        </View>

                        <View>
                            <View
                                style={[AppStyles.marginContentTop, AppStyles.marginContentRight, AppStyles.marginContentLeft]}><TextInputBase
                                icon={Images.ic_mail} text={I18n.t('email')} etValue={email}
                                textChange={(email) => {
                                    this.setState({email})
                                }}/></View>
                            <View
                                style={[AppStyles.marginContentTop, AppStyles.marginContentRight, AppStyles.marginContentLeft]}><TextInputBase
                                icon={Images.ic_lock} text={I18n.t('password')} visible={true} etValue={password}
                                textChange={(password) => {
                                    this.setState({password})
                                }}/></View>
                            <Button block success rounded onPress={() => {
                                this._storeData()
                                this.directLogin()
                            }}
                                    style={[styles.styleBtn, AppStyles.marginLayoutRight, AppStyles.marginLayoutLeft, AppStyles.marginLayoutTop]}><Text>{I18n.t('create')}</Text></Button>
                        </View>

                    </View>

                    <View style={[styles.bottom, {alignSelf: 'center'}]}><TouchableOpacity onPress={() => {
                    }}><Text style={styles.text}>{I18n.t('backToLogin')}</Text></TouchableOpacity></View>

                </ImageBackground>
            </ExtContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        //alignItems: 'center',
        justifyContent: 'center'
    },

    styleForm: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    styleBtn: {
        backgroundColor: '#19A397',
        height: 40
    },

    styleWelcome: {
        fontWeight: 'normal',
        fontSize: 14
    },

    signup: {
        fontSize: 20,
        margin: 10,
        marginTop: 150,
        marginLeft: 40,
        color: '#333333',
        fontWeight: 'bold'
    },

    text: {
        fontSize: 18,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#19A397',
        borderWidth: 1,
        color: '#19A397',
        paddingLeft: 20,
        paddingRight: 20
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        marginBottom: 36,
    },

    lbText: {
        color: '#333333',
        marginLeft: 40,
        fontSize: 20,
        fontWeight: 'bold'
    },
});


const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(RegisterContainer);
