import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Notes from '../../container/screens/EnterNotes';
import DetailedNotes from '../../container/screens/DetailedNotes';
import SplashScreen from '../../container/screens/SplashScreen';
import Home from '../../container/screens/Home';
import SignIn from '../../container/screens/SignIn';
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store/configStore";


export type RootStackParamList = {
    SplashScreen: undefined,
    SignIn: undefined,
    Home: undefined,
    Notes: undefined;
    DetailedNotes: { userNotes: string | undefined };
};

const RootStack = createStackNavigator<RootStackParamList>();

interface Props {

}

const RootNavigator: React.FC<Props> = () => {
    const { Navigator, Screen } = RootStack
    const userToken = useSelector((state: AppState) => state.persistedReducer.token);
    let isTokenAvailable = userToken == "" ? false : true

    console.log("isTokenAvailable==", isTokenAvailable)

    return (
        <>

            <SplashScreen />
            {isTokenAvailable ? <Navigator screenOptions={{ headerShown: false }}>

                <Screen name="Home" component={Home} />
                <Screen name="Notes" component={Notes} />
                <Screen name="DetailedNotes" component={DetailedNotes} />
            </Navigator> :
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="SignIn" component={SignIn} />
                </Navigator>}

        </>
    )
}

export default RootNavigator;