import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import EnterNotes from '../../container/screens/EnterNotes';
import DetailedNotes from '../../container/screens/DetailedNotes';
import SplashScreen from '../../container/screens/SplashScreen';
import GoogleSignIn from '../../container/screens/GoogleSignIn';


export type RootStackParamList = {
    SplashScreen: undefined,
    GoogleSignIn: undefined,
    EnterNotes: undefined;
    DetailedNotes: { userNotes: string | undefined };
};

const RootStack = createStackNavigator<RootStackParamList>();

interface Props {

}

const RootNavigator: React.FC<Props> = () => {
    const { Navigator, Screen } = RootStack
    return (
        <Navigator initialRouteName="SplashScreen">
            <Screen name="SplashScreen" component={SplashScreen} />
            <Screen name="GoogleSignIn" component={GoogleSignIn} />
            <Screen name="EnterNotes" component={EnterNotes} />
            <Screen name="DetailedNotes" component={DetailedNotes} />
        </Navigator>
    )
}

export default RootNavigator;