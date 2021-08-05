import React, { useState } from "react";
import { Button, SafeAreaView, TextInput, Text, FlatList } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";

// {id : number, value : string}
// delete button
// Fxn component with types {value, onDeletePress}
// make Enter NOtes the first screen

const EnterNotes = () => {


    interface Note {

        id?: number;
        value?: string;

    }


    type detailScreenProp = StackNavigationProp<RootStackParamList, 'DetailedNotes'>;
    const navigation = useNavigation<detailScreenProp>();


    const [notes, setNotes] = useState("")
    const [noteArray, setNoteArray] = useState<Note[] | null>(null);
    //const [noteArray, setNoteArray] = useState<Array<string>>([])



    const onChangeText = (text: string) => {
        setNotes(text)
    }

    const onPressAddNoteBtn = () => {

         //setNoteArray(noteArray => [...noteArray,notes]);
        // setNoteArray(noteArray => [...noteArray, notes])
        setNotes("")
    }

    const renderNotes = ({ item }: { item: Note }) => {

        return (
            <Text
                style={styles.txtNotesData}
                onPress={() => {
                    navigation.navigate("DetailedNotes", {
                        userNotes: item.toString()
                    });
                }}
            >{item.value}</Text>
        )
    }


    return (
        <SafeAreaView style={styles.rootMainContainer}>
            <FlatList
                data={noteArray}
                renderItem={renderNotes}
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