import React, { useRef, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView, TextInput, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { OutlinedTextField } from 'rn-material-ui-textfield'
import { getIcons } from "../../../../assets/images/icons";
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { showFlashMessage } from '../../../utils/Common';
import { useDispatch } from "react-redux";
import { updateUserToken } from "../../../redux/Actions/UserDataToken";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../services/RootNavigator";
import Loader from '../../reuse/CustomLoader';
import * as ValidateClass from "../../../utils/Validate";
import Config from "../../../utils/Config";
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

    const onPressSignInBtn = async () => {

        let isValidate = ValidateClass.validateSignUp(currentUserName, currentEmail, currentPassword)
        if (isValidate) {
            setLoading(true)
            try {
                let response = await auth()
                .createUserWithEmailAndPassword(currentEmail, currentPassword)
                if (response) {
                    auth().currentUser?.getIdToken().then(token => {
                        dispatch(updateUserToken(token));
                        setLoading(false);
                        navigation.navigate("Home")
                        showFlashMessage(Config.strings.signed_in_success, 'success');
                    })
                }
            }
            catch (error) {
                setLoading(false);
                showFlashMessage(error.message, 'danger');
            };
            
        }
    }

    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <ScrollView>

                <View style={styles.rootInnerContainer}>
                    <TouchableOpacity style={styles.imgLogo}>
                        {getIcons("Logo", moderateScale(200))}
                    </TouchableOpacity>

                    <OutlinedTextField
                        containerStyle={{ marginTop: moderateScale(40), }}
                        style={{ fontFamily: 'Montserrat-Regular' }}
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
                        style={{ fontFamily: 'Montserrat-Regular' }}
                        inputRef={emailRef}
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
                        style={{ fontFamily: 'Montserrat-Regular' }}
                        inputRef={passwordRef}
                        secureTextEntry={secureTextEntry}
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
                                        style={styles.imgEye} />
                                </TouchableOpacity>
                            )
                        }}

                    />
                </View>

                {loading && <Loader />}

                <LinearGradient colors={Config.colors.HEX_GRADIENT2}
                    style={styles.linearGradient}>
                    <TouchableOpacity style={styles.btnAddContainer}
                        onPress={onPressSignInBtn}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={styles.txtSignIn}
                    onPress={onPressSignIn}>{Config.strings.signIn_text}</Text>

            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp;