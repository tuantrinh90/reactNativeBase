import React, {Component} from 'react';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, Card, Button} from 'native-base';
import {StyleSheet, View, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native';
import TextInputBase from '../components/inputtext/TextInputBase.js';
import {AppStyles, ActionTypes, HeaderUtils, Dimens, Images, Utils, I18n} from '../configs/appConfig';

// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';
import {NavigationEvents} from 'react-navigation';

class LoginContainer extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '', password: ''
        }
    }

    _retrieveData = async () => {
        try {
            const emailRegister = await AsyncStorage.getItem('email');
            const passRegiter = await AsyncStorage.getItem('pass');
            if (Utils.isNullOrUndefined(this.state.etMail)
                && Utils.isNullOrUndefined(this.state.etPass)) {
                return
            }
            if (emailRegister === this.state.etMail && passRegiter === this.state.etPass) {
                this.props.navigation.navigate('HomeContainer')
            } else {
                alert('wrong email and password');
            }
        } catch (error) {
            // Error retrieving data
        }
    };


    render() {
        const {etMail, etPass} = this.state;

        return (
            <ExtContainer>
                <ImageBackground source={Images.ic_bg} style={styles.container}>
                    <View>
                        <View style={{alignSelf: 'flex-start'}}><Text
                            style={styles.lbText}>{I18n.t('login')}</Text><Text
                            style={[styles.styleWelcome, {
                                color: '#333333',
                                marginLeft: 40,
                                fontWeight: 'normal'
                            }]}>{I18n.t('welcome')}</Text>
                        </View>

                        <View>
                            <View
                                style={[AppStyles.marginContentTop, AppStyles.marginContentRight, AppStyles.marginContentLeft]}><TextInputBase
                                icon={Images.ic_mail} text={I18n.t('email')} etValue={etMail}
                                textChange={(etMail) => {
                                    this.setState({etMail})
                                }}/></View>
                            <View
                                style={[AppStyles.marginContentTop, AppStyles.marginContentRight, AppStyles.marginContentLeft]}><TextInputBase
                                icon={Images.ic_lock} text={I18n.t('password')} visible={true} etValue={etPass}
                                textChange={(etPass) => {
                                    this.setState({etPass})
                                }}/></View>

                            <Text style={[styles.styleWelcome, AppStyles.marginLayoutRight, {
                                textAlign: 'right',
                            }]}>{I18n.t('forgot_pass')}</Text>

                            <Button block success rounded onPress={() => {
                                this._retrieveData()
                            }}
                                    style={[styles.styleBtn, AppStyles.marginLayoutRight, AppStyles.marginLayoutLeft, AppStyles.marginLayoutTop]}>
                                <Text style={{}}>{I18n.t('lets_go')}</Text>
                            </Button>

                        </View>
                    </View>

                    <View style={[styles.bottom, {alignSelf: 'center'}]}>
                        <TouchableOpacity onPress={() => {
                        }}><Text style={styles.text}>{I18n.t('creat_account')}</Text></TouchableOpacity>
                    </View>
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

export default connect(mapStateToProps)(LoginContainer);
