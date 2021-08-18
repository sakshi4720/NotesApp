import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../../container/screens/Home';
import EnterNotes from '../../container/screens/EnterNotes';
import DetailedNotes from '../../container/screens/DetailedNotes';
import SplashScreen from '../../container/screens/SplashScreen';
import GoogleSignIn from '../../container/screens/GoogleSignIn';


export type RootStackParamList = {
    SplashScreen: undefined,
<<<<<<< HEAD
    GoogleSignIn: undefined,
=======
>>>>>>> 3b4f5643f34e994bec004aefa83220b9a12de032
    Home: undefined,
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
<<<<<<< HEAD
            <Screen name="GoogleSignIn" component={GoogleSignIn} />
=======
>>>>>>> 3b4f5643f34e994bec004aefa83220b9a12de032
            <Screen name="Home" component={Home} />
            <Screen name="EnterNotes" component={EnterNotes} />
            <Screen name="DetailedNotes" component={DetailedNotes} />
        </Navigator>
    )
}

export default RootNavigator;