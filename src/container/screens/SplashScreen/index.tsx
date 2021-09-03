import React, { useEffect } from 'react';
import { View } from 'react-native';
import splashScreen from 'react-native-splash-screen';

const SplashScreen = () => {
 
  useEffect(() => {
    // timeout for adding additional delay to splash screen
    setTimeout(() => {
      splashScreen.hide();
    }, 1000);
  }, []);
  // returns empty view so that the transition is smooth
  return <View />;
};

export default SplashScreen;
