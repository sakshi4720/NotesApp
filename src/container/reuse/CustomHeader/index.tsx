import React from 'react';
import { Image, Text, TouchableOpacity, } from 'react-native';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";
import { getIcons } from '../../../../assets/images/icons';

const CustomHeader = ({ headerTitle, isShowingOnBackPress, onBackPress, isShowingSignOut, onSignOutBtnPress }: { headerTitle: string, isShowingOnBackPress: boolean, onBackPress: () => void, isShowingSignOut: boolean, onSignOutBtnPress: () => void }) => {

    return (
        <LinearGradient colors={['#ADD8E6', '#728FCE']} style={styles.linearGradient}>
            {isShowingOnBackPress && <TouchableOpacity style={styles.backIconContainer}
                onPress={() => onBackPress && onBackPress()}>

                <Image source={require('../../../../assets/images/ic_back.png/')}
                    style={{ height: 20, width: 20, tintColor: 'white' }} />

            </TouchableOpacity>}
            <Text style={styles.headerTitle}>{headerTitle}</Text>

            {isShowingSignOut && <TouchableOpacity style={styles.rightImageContainer}
                onPress={() => onSignOutBtnPress && onSignOutBtnPress()}>

                <Image source={require('../../../../assets/images/ic_sign_out.png/')}
                    style={{ height: 35, width: 35, resizeMode: 'contain' }} />

            </TouchableOpacity>}
        </LinearGradient>
    )
}

export default CustomHeader;