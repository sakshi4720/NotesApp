import React, { useState } from "react";
import { Button, SafeAreaView, TextInput, Text, FlatList, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { connect, useSelector, useDispatch } from 'react-redux';
import { startAddNotes, startRemoveNotes } from "../../redux/Actions/Notes"
import { AppState } from "../../redux/Store/configStore";

export interface Note {

    id?: number;
    value?: string;

}

type Props = LinkStateProps & LinkDispatchProps

// const dispatch= useDispatch()

const EnterNotes: React.FC<Props> = () => {

    type detailScreenProp = StackNavigationProp<RootStackParamList, 'DetailedNotes'>;
    const navigation = useNavigation<detailScreenProp>();

    // const [notes, setNotes] = useState("")

    const [notes, setNotes] = useState({ id: 0, value: "" })
    const [noteArray, setNoteArray] = useState([notes])

    //const [noteArray, setNoteArray] = useState<Array<string>>([])

    const onChangeText = (text: string) => {
        setNotes({ ...notes, id: noteArray.length, value: text })
    }

    const onPressAddNoteBtn = () => {

        setNoteArray(noteArray => [...noteArray, notes]);
        // console.log(noteArray)
        // setNoteArray(noteArray => [...noteArray, notes])
        setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const onPressDeleteBtn = (item: Note, index: number) => {


        // let selectedIndex = noteArray.findIndex((element) => { return element.id == item.id })
        // noteArray.splice(selectedIndex, 1)
        // setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {

        return (
            <View style={styles.rootContainerNoteItem}>
                <Text
                    style={styles.txtNotesData}
                    onPress={() => {
                        navigation.navigate("DetailedNotes", {
                            userNotes: item.value
                        });
                    }}>{item.value}</Text>

                {item.value !== "" && <TouchableOpacity style={{}}
                    onPress={() => onPressDeleteBtn(item, index)}>
                    <Image source={require('../../../assets/images/icon_delete_red.png')} />
                </TouchableOpacity>}
            </View>
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
                value={notes.value}
                onChangeText={text => onChangeText(text)} />

            <Button
                onPress={() => onPressAddNoteBtn()}
                title="Add Note"
                color="#841584"
            />

        </SafeAreaView>
    )

}

interface LinkStateProps {
    notes: Note[]
}


interface LinkDispatchProps {
    startAddNotes: (note: Note) => void
    startRemoveNotes: (id: number) => void
}

const mapStateToProps = (state: AppState) => ({
    note: state.notes
})

export default connect(mapStateToProps)(EnterNotes);