import { AsyncStorage } from 'react-native';
import * as Utils from '../configs/utils';

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
}

export const getData = async key => {
    let value = null;

    try {
        value = await AsyncStorage.getItem(key);
    } catch (error) {
        console.log(error);
    }

    return value;
}

export const setDataJson = async (key, value) => {
    try {
        if (!Utils.isNullOrUndefined(value)) {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } else {
            await AsyncStorage.setItem(key, null);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getDataJson = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (!Utils.isNullOrUndefined(value)) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.log(error);
    }

    return null;
}

export const removeData = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}

