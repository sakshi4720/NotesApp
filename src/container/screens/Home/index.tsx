import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView, FlatList,Keyboard } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "./styles";
import { RootStackParamList } from "../../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { FloatingAction } from 'react-native-floating-action';
import { getIcons } from '../../../../assets/images/icons'
import { moderateScale } from "react-native-size-matters";


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

    const actionButtonStyle = {
        color: "white",
        textBackground: 'transparent',
        textColor: 'white',
      
        
    }

    const FABOptions = [
        {
          name: "MCQ",
          text: "MCQ",
          icon: getIcons('MCQIcon', 22),
          position: 2,
          ...actionButtonStyle,
        },
        {
          name: "Questions",
          text: "Questions",
          icon: getIcons('QuestionIcon', 25),
          position: 1,
          ...actionButtonStyle,
        },
      ];
    
    const onFABPressed=(selectedOption?: string)=>{

        if(selectedOption === 'Questions'){
            navigation.navigate("EnterNotes")
            return
        }

    }

    const renderListItems = ({ item, index }: { item: { title: string, body: string }, index: number }) => {
        return (
            <View style={styles.rootItemContainer}>
                <Text style={styles.txtTitle}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }
    
    return (
        <SafeAreaView style={styles.rootMainContainer}>

            <FlatList data={data}
                renderItem={renderListItems}
                keyExtractor={(item) =>
                    item.toString()} />

           
            <FloatingAction
                actions={FABOptions}
                listenKeyboard
                dismissKeyboardOnPress
                color={"#FF6700"}
                onPressItem={onFABPressed}
                distanceToEdge={{
                    vertical:  moderateScale(90),
                    horizontal: moderateScale(20),
                }}
                shadow={{
                    shadowColor: 'transparent'
                }}
            />


            {/* <TouchableOpacity style={styles.iconAddBtnContainer}
                onPress={() => {
                    navigation.navigate("EnterNotes")
                }}>
                <Image source={require('../../../assets/images/icon_add_more.png')} />
            </TouchableOpacity> */}
        </SafeAreaView>
    )

}

export default Home;