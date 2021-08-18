import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../../container/Home';
import EnterNotes from '../../container/EnterNotes';
import DetailedNotes from '../../container/DetailedNotes';
import SplashScreen from '../../container/SplashScreen';


export type RootStackParamList = {
    SplashScreen: undefined,
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
            <Screen name="Home" component={Home} />
            <Screen name="EnterNotes" component={EnterNotes} />
            <Screen name="DetailedNotes" component={DetailedNotes} />
        </Navigator>
    )
}

export default RootNavigator;