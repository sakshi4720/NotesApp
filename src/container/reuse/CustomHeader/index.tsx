import React from 'react';
import { Image, Text, TouchableOpacity, } from 'react-native';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";

const CustomHeader = ({ headerTitle, isShowingOnBackPress, onBackPress, isShowingSignOut, onSignOutBtnPress }: { headerTitle: string, isShowingOnBackPress: boolean, onBackPress: () => void, isShowingSignOut: boolean, onSignOutBtnPress: () => void }) => {

    return (
        <LinearGradient colors={['#ADD8E6', '#728FCE']} style={styles.linearGradient}>
            {isShowingOnBackPress && <TouchableOpacity style={styles.backIconContainer}
                onPress={() => onBackPress && onBackPress()}>

                <Image source={require('../../../../assets/images/ic_back.png/')}
                    style={styles.backImg} />

            </TouchableOpacity>}
            <Text style={styles.headerTitle}>{headerTitle}</Text>

            {isShowingSignOut && <TouchableOpacity style={styles.rightImageContainer}
                onPress={() => onSignOutBtnPress && onSignOutBtnPress()}>

                <Image source={require('../../../../assets/images/ic_sign_out.png/')}
                    style={styles.signOutImg} />

            </TouchableOpacity>}
        </LinearGradient>
    )
}

export default React.memo(CustomHeader);