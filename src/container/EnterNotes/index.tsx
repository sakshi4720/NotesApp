import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, TextInput, Text, View, FlatList } from 'react-native';
import { StackNavigationProp,  } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../services/RootNavigator";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";



const EnterNotes = () => {

    type detailScreenProp = StackNavigationProp<RootStackParamList, 'DetailedNotes'>;
    const navigation = useNavigation<detailScreenProp>();

     const route = useRoute<RouteProp<RootStackParamList, "DetailedNotes">>()

    const [notes, setNotes] = useState("")
    const [noteArray, setNoteArray] = useState<Array<string>>([])

    useEffect(() => {
        () => {

        }
    })



    const onChangeText = (text: string) => {
        setNotes(text)

    }

    const onPressAddNoteBtn = () => {

        setNoteArray(noteArray => [...noteArray, notes])
        setNotes("")

    }

    return (
        <SafeAreaView style={styles.rootMainContainer}>
            <Text style={styles.label}>Enter Notes </Text>

            <FlatList
                data={noteArray}
                renderItem={({ item }) => <Text style={{ color: "green", padding: 10 }}
                    onPress={() => {
                        navigation.navigate("DetailedNotes",{
                            userNotes:item
                        });
                    }}>{item}</Text>}
                keyExtractor={(item) =>
                    item.toString()} />

            <TextInput style={styles.txtInputContainer}
                placeholder={'Enter your text here...'}
                multiline={false}
                value={notes}
                onChangeText={text => onChangeText(text)} />

            <Button
                onPress={() => onPressAddNoteBtn()}
                title="Add Note"
                color="#841584"
            />

        </SafeAreaView>
    )
}

export default EnterNotes;