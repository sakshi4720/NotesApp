import React, { useEffect } from 'react';
import { View } from 'react-native';
import splashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../services/RootNavigator';


const SplashScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Notes">>()

  useEffect(() => {

   
    // timeout for adding additional delay to splash screen
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Notes' }],
      });
      splashScreen.hide();
    }, 100);
  }, []);
  // returns empty view so that the transition is smooth
  return <View />;
};

export default SplashScreen;
