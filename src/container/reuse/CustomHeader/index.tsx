import React from 'react';
import { Image, Text, TouchableOpacity,  } from 'react-native';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";
import { getIcons } from '../../../../assets/images/icons';

const CustomHeader = ({headerTitle,onBackPress}:{ headerTitle:string,onBackPress:()=>void}) => {

    return (
        <LinearGradient colors={['#ADD8E6', '#728FCE']} style={styles.linearGradient}>
            <TouchableOpacity style={styles.backIconContainer}
            onPress={() => onBackPress && onBackPress()}>

                <Image source={require('../../../../assets/images/ic_back.png/')}
                style={{height:20, width:20, tintColor:'white'}}/>
                
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
        </LinearGradient>
    )
}

export default CustomHeader;