import React, { useState } from "react";
import { TouchableOpacity, Text, SafeAreaView, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { TextField } from 'rn-material-ui-textfield';
import styles from './styles';

import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../services/RootNavigator";
import { Log } from '../../../utils/Logger';

const GoogleSignIn = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "EnterNotes">>()

  GoogleSignin.configure({
    webClientId: '550990927312-bce7topq7evl0lvei5ns0boip6qov42t.apps.googleusercontent.com',
  });


  const onPressSignInBtn = async () => {

    // navigation.navigate('EnterNotes')
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      Log("userInfo==", JSON.stringify(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <SafeAreaView style={styles.rootMainContainer}>

      <LinearGradient colors={['#FF6700', '#FFA500']} style={styles.linearGradient}>
        <TouchableOpacity style={styles.btnAddContainer}
          onPress={() => { onPressSignInBtn() }}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </LinearGradient>

    </SafeAreaView>
  )
}

export default GoogleSignIn;