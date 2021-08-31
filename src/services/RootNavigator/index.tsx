import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Notes from '../../container/screens/EnterNotes';
import DetailedNotes from '../../container/screens/DetailedNotes';
import SplashScreen from '../../container/screens/SplashScreen';
import Home from '../../container/screens/Home';


export type RootStackParamList = {
    SplashScreen: undefined,
    Home: undefined,
    Notes: undefined;
    DetailedNotes: { userNotes: string | undefined };
};

const RootStack = createStackNavigator<RootStackParamList>();

interface Props {

}

const RootNavigator: React.FC<Props> = () => {
    const { Navigator, Screen } = RootStack
    return (
        <Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Screen name="SplashScreen" component={SplashScreen} />
            <Screen name="Home" component={Home} />
            <Screen name="Notes" component={Notes} />
            <Screen name="DetailedNotes" component={DetailedNotes} />
        </Navigator>
    )
}

export default RootNavigator;