import React, { useEffect, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { OutlinedTextField } from 'rn-material-ui-textfield'
import { getIcons } from "../../../../assets/images/icons";
import auth, { firebase } from '@react-native-firebase/auth';
import styles from './styles';
import { showFlashMessage } from '../../../utils/Common';
import { useDispatch } from "react-redux";
import { updateUserToken } from "../../../redux/Actions/UserDataToken";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../services/RootNavigator";

export interface UserTokenInfo {
    token: string | undefined;

}

const SignUp = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "SignIn">>()

    const [currentEmail, setCurrentEmail] = useState("")
    const [currentUserName, setCurrentUserName] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")

    const dispatch = useDispatch()

    const onChangeUsername = (text: string) => {
        setCurrentUserName(text)
    }

    const onChangeEmail = (text: string) => {
        setCurrentEmail(text)
    }

    const onChangePassword = (text: string) => {
        setCurrentPassword(text)
    }
    const onPressSignIn = () => {
        navigation.navigate('SignIn')
    }

    const onPressSignInBtn = () => {
        auth()
            .createUserWithEmailAndPassword(currentEmail, currentPassword)
            .then((res) => {
                if (res) {
                    auth().currentUser?.getIdToken().then(token => {
                        dispatch(updateUserToken(token));
                        navigation.navigate("Home")
                        showFlashMessage('User account created & signed in!', 'success');
                    })
                }
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    showFlashMessage('That email address is already in use!', 'warning');
                    return
                }

                if (error.code === 'auth/invalid-email') {
                    showFlashMessage('That email address is invalid!', 'danger');
                    return
                }

                showFlashMessage(error.message, 'danger');
            });
    }

    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <ScrollView>

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
                        onChangeText={onChangeUsername}
                        returnKeyType="done"
                        label="Username"

                    />

                    <OutlinedTextField
                        containerStyle={styles.textFieldContainer}
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
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={styles.txtSignIn}
                    onPress={onPressSignIn}>Already have an account? Sign In here.</Text>

            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp;