import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "./styles";
import { RootStackParamList } from "../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";



const Home = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>()

    const fetchURL = "https://jsonplaceholder.typicode.com/posts"

    const [data, setData] = useState([])
    const getData = () =>
        fetch(`${fetchURL}`)
            .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    const renderListItems = ({ item, index }: { item: {title: string,body: string}, index: number }) => {
        return (
            <View style={styles.rootItemContainer}>
                <Text style={styles.txtTitle}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }
    console.log("Data==", JSON.stringify(data))

    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <FlatList data={data}
                renderItem={renderListItems}
                keyExtractor={(item) =>
                    item.toString()} />

            {/* {data.map((item) => {
                return (
                    <View>
                        <Text>{item.title}</Text>

                        <Text></Text>
                    </View>
                )
            })} */}


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