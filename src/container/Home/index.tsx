import React from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "./styles";

type RootStackParamList = {
    Home: { notes: string };
    EnterNotes: undefined
}


export interface HomeProps {
    navigation: StackNavigationProp<RootStackParamList, "Home">
}



const Home: React.FC<HomeProps> = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <Text>{''}</Text>

            <TouchableOpacity style={styles.iconAddBtnContainer}
                onPress={() => { navigation.navigate("EnterNotes") }}>
                <Image source={require('../../../assets/images/icon_add_more.png')} />
            </TouchableOpacity>

        </SafeAreaView>
    )

}

export default Home;