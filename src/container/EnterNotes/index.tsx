import React, { useState } from "react";
import { Button, SafeAreaView, TextInput, Text, FlatList, View, TouchableOpacity, Image, Alert } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { connect, useSelector, useDispatch } from 'react-redux';
import { startAddNotes, startRemoveNotes } from "../../redux/Actions/Notes"
import { AppState } from "../../redux/Store/configStore";
import LinearGradient from "react-native-linear-gradient";
import TextField from 'rn-material-ui-textfield';
import { addNoteValidationType, validateAddNote } from "../../utils/Validate";
import { getIcons } from '../../../assets/images/icons'
import { moderateScale } from "react-native-size-matters";

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
    const [error, setError] = useState<addNoteValidationType>({})

    //const [noteArray, setNoteArray] = useState<Array<string>>([])

    const onChangeText = (text: string) => {
        setNotes({ ...notes, id: noteArray.length, value: text })
    }

    const onPressAddNoteBtn = () => {

        const result = validateAddNote(notes.value);
        if (!result.isValid) {
            if (result.noteDetailsError) {
                return Alert.alert(result.noteDetailsError);
            }
            return setError({
                ...error,
                noteNameError: result.noteNameError,
            });
        }

        setNoteArray(noteArray => [...noteArray, notes]);
        // console.log(noteArray)
        // setNoteArray(noteArray => [...noteArray, notes])
        setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const onPressDeleteBtn = (item: Note, index: number) => {


        let selectedIndex = noteArray.findIndex((element) => { return element.id == item.id })
        noteArray.splice(selectedIndex, 1)
        setNotes({ ...notes, id: noteArray.length, value: "" })
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

    console.log('noteArray==',noteArray.length)
    return (
        <SafeAreaView style={styles.rootMainContainer}>
            {noteArray.length>1 ? <FlatList
                data={noteArray}
                renderItem={renderNotes}
                keyExtractor={(item) =>
                    item.toString()} /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {getIcons("AddIcon")}
            </View>}

            <TextInput style={styles.txtInputContainer}
                placeholder={'Enter your text here...'}
                multiline={false}
                value={notes.value}
                onChangeText={text => onChangeText(text)} />


            <LinearGradient colors={['#FF6700', '#FFA500']} style={styles.linearGradient}>
                <TouchableOpacity style={styles.btnAddContainer}
                    onPress={() => { onPressAddNoteBtn() }}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </LinearGradient>


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