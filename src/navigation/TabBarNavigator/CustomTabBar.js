import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// global
import {Colors, Images, AppStyles} from '../../configs/appConfig';

class CustomTabBar extends Component {
    render() {
        let navigation = this.props.navigation;
        let icons = [
            Images.ic_home,
            Images.ic_home,
            Images.ic_home,
            Images.ic_home,
            Images.ic_home
        ];

        const {routes, index} = navigation.state;

        return (
            <View style={styles.tabContainer}>
                {routes.map((route, idx) => {
                    const isActive = index === idx;

                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(route.routeName)}
                            style={[
                                styles.tab,
                                {backgroundColor: 'red'}
                            ]}
                            key={route.routeName}
                            activeOpacity={1}
                        >

                                <Image
                                    source={icons[idx]}
                                    resizeMode="contain"
                                    style={[
                                        AppStyles.iconAction,
                                        {
                                            tintColor: isActive ? 'white' : 'yellow',
                                            alignSelf: 'center'
                                        }
                                    ]}
                                />

                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    tabContainer: {
        flexDirection: 'row',
        // borderTopWidth: 0.5,
        // borderTopColor: '$color_gray'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_content',
    },
    tabLongText: {
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_content'
    }
});

const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer
    };
};

export default connect(mapStateToProps)(CustomTabBar);
