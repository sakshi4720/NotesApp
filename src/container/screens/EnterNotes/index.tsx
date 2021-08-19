import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, Text, FlatList, View, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { connect, useSelector, useDispatch } from 'react-redux';
import { AppState } from "../../../redux/Store/configStore";
import LinearGradient from "react-native-linear-gradient";
import { addNoteValidationType, validateAddNote } from "../../../utils/Validate";
import { getIcons } from '../../../../assets/images/icons'
import { firebase } from "@react-native-firebase/firestore"
import CustomTabCardComponent from '../../reuse/CustomTabCardComponent';


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

    const getNotesData = async () => {
        //var list = await firebase.firestore().collection('userNotes').orderBy('createdAt').get()

    }

    useEffect(() => {
        getNotesData()
    }, [])

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

        firebase.firestore().collection('userNotes').add({
            id: notes.id,
            value: notes.value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        firebase.firestore().collection('userNotes').doc().set(notes).then(() => {
            setNoteArray(noteArray => [...noteArray, notes]);
        })


        // setNoteArray(noteArray => [...noteArray, notes]);
        setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const onPressDeleteBtn = (item: Note, index: number) => {

        let selectedIndex = noteArray.findIndex((element) => { return element.id == item.id })
        noteArray.splice(selectedIndex, 1)
        setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {


        return (

            <CustomTabCardComponent userNotesObj={item} />

        )
    }

    return (
        <SafeAreaView style={styles.rootMainContainer}>
            {noteArray.length > 1 ? <FlatList
                style={{ marginTop: 20 }}
                data={noteArray}
                renderItem={renderNotes}
                keyExtractor={(item) =>
                    item.toString()} /> : <View style={styles.addIconContainer}>
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