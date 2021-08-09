import React from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "./styles";
import { RootStackParamList } from "../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>()

    return (
        <SafeAreaView style={styles.rootMainContainer}>
            <TouchableOpacity style={styles.iconAddBtnContainer}
                onPress={() => {
                    navigation.navigate("EnterNotes")
                }}>
                <Image source={require('../../../assets/images/icon_add_more.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default Home;