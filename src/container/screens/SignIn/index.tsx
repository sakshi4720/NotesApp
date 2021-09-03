import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Image, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { OutlinedTextField } from 'rn-material-ui-textfield'
import { getIcons } from "../../../../assets/images/icons";
import auth from '@react-native-firebase/auth';

import styles from './styles';

const SignIn = () => {

    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")

    const onChangeEmail = (text: string) => {
        setCurrentEmail(text)
    }

    const onChangePassword = (text: string) => {
        setCurrentPassword(text)
    }

    const onPressSignInBtn = () => {
        auth()
            .createUserWithEmailAndPassword(currentEmail, currentPassword)
            .then(() => {

                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <View style={styles.rootInnerContainer}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                    {getIcons("Logo", moderateScale(200))}
                </TouchableOpacity>

                <OutlinedTextField
                    containerStyle={{ marginTop: moderateScale(40), }}
                    textColor={'ADD8E6'}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={onChangeEmail}
                    returnKeyType="done"
                    label="Email Address"

                />

                <OutlinedTextField
                    containerStyle={styles.textFieldContainer}

                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    clearTextOnFocus={true}
                    onChangeText={onChangePassword}
                    returnKeyType="done"
                    label="Password"
                    title="Choose wisely"
                    maxLength={20}
                    characterRestriction={20}

                />
            </View>

            <LinearGradient colors={['#ADD8E6', '#728FCE']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.btnAddContainer}
                    onPress={onPressSignInBtn}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default SignIn;