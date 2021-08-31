import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";
import { getIcons } from '../../../../assets/images/icons';

const CustomHeader = () => {

    return (
        <LinearGradient colors={['#ADD8E6', '#728FCE']} style={styles.linearGradient}>
            <Text style={styles.headerTitle}>Notes</Text>
            <TouchableOpacity style={styles.rightImageContainer}>
                {getIcons("SettingsIcon")}
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CustomHeader;