import React, { useRef, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { OutlinedTextField, } from 'rn-material-ui-textfield'
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
import Config from "../../../utils/Config";
import * as Helper from './helper';

const passwordVisible = require('../../../../assets/images/ic_eye.png')
const passwordHidden = require('../../../../assets/images/ic_closed_eye.png')

export interface UserTokenInfo {
    token: string | undefined;
}

const SignIn = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "SignIn">>()

    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [loading, setLoading] = useState<boolean>(false)
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)


    //refs
    const emailRef = useRef<TextInput | null>(null)
    const passwordRef = useRef<TextInput | null>(null)

    const dispatch = useDispatch()

    const onChangeEmail = (text: string) => {
        setCurrentEmail(text)
    }

    const onChangePassword = (text: string) => {
        setCurrentPassword(text)
    }

    //onPressSignUp
    const onPressSignUp = () => {
        navigation.navigate('SignUp')
    }

    const onPressSignInBtn = async () => {
        setLoading(true);
        let response = await Helper.onPressSignInBtn(currentEmail, currentPassword)
        if (response) {
            auth().currentUser?.getIdToken().then(token => {
                dispatch(updateUserToken(token));
                setLoading(false);
                navigation.navigate("Home")
                showFlashMessage(Config.strings.signed_in_success, 'success');
            })
        }
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <View style={styles.rootInnerContainer}>
                <TouchableOpacity style={styles.imgLogo}>
                    {getIcons("Logo", moderateScale(200))}
                </TouchableOpacity>

                <OutlinedTextField
                    containerStyle={{ marginTop: moderateScale(40), }}
                    style={{ fontFamily: 'Montserrat-Regular' }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={onChangeEmail}
                    inputRef={emailRef}
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                    returnKeyType="next"
                    label="Email Address"

                />

                <OutlinedTextField
                    containerStyle={styles.textFieldContainer}
                    inputRef={passwordRef}
                    style={{ fontFamily: 'Montserrat-Regular' }}
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
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </LinearGradient>

            <Text style={styles.txtSignUp}
                onPress={onPressSignUp}>{Config.strings.signUp_text}</Text>

        </SafeAreaView>
    )
}

export default SignIn;