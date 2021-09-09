import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView, TextInput, Image } from "react-native";
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
import Loader from '../../reuse/CustomLoader';

const passwordVisible = require('../../../../assets/images/ic_eye.png')
const passwordHidden = require('../../../../assets/images/ic_closed_eye.png')

export interface UserTokenInfo {
    token: string | undefined;

}

const SignUp = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "SignIn">>()

    const [currentEmail, setCurrentEmail] = useState("")
    const [currentUserName, setCurrentUserName] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [loading, setLoading] = useState<boolean>(false)
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

    //refs
    const nameRef = useRef<TextInput | null>(null)
    const emailRef = useRef<TextInput | null>(null)
    const passwordRef = useRef<TextInput | null>(null)


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

        if (currentUserName.length === 0) {
            showFlashMessage('Please enter your username',"danger")
            return 
        }

        if (currentEmail.length === 0) {
            showFlashMessage('Please enter your email',"danger")
            return 
        }
      
        if (currentPassword.length === 0) {
          showFlashMessage('Please enter your password',"danger")
          return 
        }

        setLoading(true)
        auth()
            .createUserWithEmailAndPassword(currentEmail, currentPassword)
            .then((res) => {
                if (res) {
                    auth().currentUser?.getIdToken().then(token => {
                        dispatch(updateUserToken(token));
                        setLoading(false)
                        navigation.navigate("Home")
                        showFlashMessage('User account created & signed in!', 'success');
                    })
                }
            })
            .catch(error => {
                setLoading(false)
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
                        inputRef={nameRef}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onChangeText={onChangeUsername}
                        onSubmitEditing={() => {
                           emailRef.current?.focus();
                        }}
                        returnKeyType="next"
                        label="Username"

                    />

                    <OutlinedTextField
                        containerStyle={styles.textFieldContainer}
                        inputRef={emailRef}
                        textColor={'ADD8E6'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onChangeText={onChangeEmail}
                        onSubmitEditing={() => {
                            passwordRef.current?.focus();
                        }}
                        returnKeyType="next"
                        label="Email Address"

                    />

                    <OutlinedTextField
                        containerStyle={styles.textFieldContainer}
                        inputRef={passwordRef}
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
                        renderRightAccessory={() => {
                            return (
                                <TouchableOpacity onPress={() => { setSecureTextEntry(!secureTextEntry) }}>
                                    <Image source={secureTextEntry ? passwordHidden : passwordVisible}
                                        style={{ height: 25, width: 25, }} />
                                </TouchableOpacity>
                            )
                        }}

                    />
                </View>

                {loading && <Loader />}

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