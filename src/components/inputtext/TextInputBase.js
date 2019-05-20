import {View, Image, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TextInputBase extends Component {
    render() {
        const {icon, text, etValue, textChange, visible} = this.props
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={icon} resizeMode='contain'/>
                <TextInput placeholder={text} value={etValue} onChangeText={textChange} secureTextEntry={visible}/>
            </View>

        );
    }
};

TextInputBase.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    etValue: PropTypes.string,
    textChange: PropTypes.string,
    visible: PropTypes.bool
}

TextInputBase.defaultProps = {
    icon: '',
    text: '',
    etValue: '',
    textChange: '',
    visible: false
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        borderColor: '#19A397',
        borderWidth: 1,
    },

    image: {
        margin: 20,
        height: 20,
    },

    textInput: {
        flex: 1,
    },
});
