import React, {Component} from 'react';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text, Image, ScrollView, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import {Colors, Images, AppStyles, HeaderUtils, Storage, Utils, I18n} from '../configs/appConfig';
import Header from '../components/header/Header';
// components
import ExtContainer from '../components/basecomponents/body/ExtContainer';


class HomeContainer extends Component {

    static navigationOptions = {
        title: 'Home',
        headerLeft: null,
        backgroundColor: 'green'
    };

    constructor(props) {
        super(props);
        this.state = {
            myData: [{
                avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                datetime: '2018-12-05T10:37:43.937Z'
            }, {
                avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                datetime: '2018-12-05T10:37:43.937Z'
            },
                {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                },
                {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }, {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }, {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }, {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }, {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }, {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }, {
                    avatar: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                    datetime: '2018-12-05T10:37:43.937Z'
                }],
        }
    }

    componentDidMount() {
        StatusBar.setHidden(false);
    }

    renderItem = (item) => {
        return (
            <Card style={[AppStyles.marginLayoutRight, AppStyles.marginLayoutLeft]}>
                <View
                    style={[styles.container, AppStyles.paddingSmall, AppStyles.marginLayoutRight]}>
                    <Image style={[AppStyles.icon]} source={{uri: item.item.avatar}}></Image>
                    <Text style={[AppStyles.marginLayoutLeft, AppStyles.marginLayoutRight]}>{item.item.text}</Text>
                </View>

                <View style={[styles.container, {alignSelf: 'flex-end'}]}>
                    <Text
                        style={[AppStyles.marginLayoutLeft, AppStyles.marginLayoutRight]}>{Utils.formatDate(item.item.datetime)}</Text>
                    <Text
                        style={[AppStyles.marginLayoutLeft, AppStyles.marginLayoutRight]}>{Utils.formatTime(item.item.datetime)}</Text>
                </View>

            </Card>

        );
    };

    render() {
        return (
            <ExtContainer>
                {/*<Header header={HeaderUtils.headerTitle(I18n.t('notification'))}*/}
                {/*        headerLeft={HeaderUtils.headerIcon(Images.ic_back, this.goBack)}/>*/}
                <FlatList
                    data={this.state.myData}
                    renderItem={(item) => this.renderItem(item)}/>
            </ExtContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        //width: '100%',
        //height: '100%',
        //alignItems: 'center',
        flexDirection: 'row',
        //justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
        loginReducer: state.loginReducer
    };
};

export default connect(mapStateToProps)(HomeContainer);
