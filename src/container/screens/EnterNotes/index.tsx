import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, Text, FlatList, View, TouchableOpacity, Alert, Image } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from 'react-redux';
import { AppState } from "../../../redux/Store/configStore";
import LinearGradient from "react-native-linear-gradient";
import { addNoteValidationType, validateAddNote } from "../../../utils/Validate";
import { getIcons } from '../../../../assets/images/icons'
import CustomTabCardComponent from '../../reuse/CustomTabCardComponent';
import { setAddedNotes, startAddNotes } from "../../../redux/Actions/Notes";
import { SwipeListView } from "react-native-swipe-list-view";


export interface Note {

    id?: number;
    value?: string;

}



const EnterNotes = () => {

    const dispatch = useDispatch()

    type detailScreenProp = StackNavigationProp<RootStackParamList, 'DetailedNotes'>;
    const navigation = useNavigation<detailScreenProp>();

    const [notes, setNotes] = useState({ id: 0, value: "" })
    const [noteArray, setNoteArray] = useState([notes])
    const [error, setError] = useState<addNoteValidationType>({})


    const getNotesData = async () => {

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

        dispatch(startAddNotes)

        setNoteArray(noteArray => [...noteArray, notes]);
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

            {noteArray.length > 1 ? <SwipeListView
                style={styles.swiperListViewContainer}
                data={noteArray}
                renderItem={renderNotes}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity style={styles.deleteBtnContainer}
                            onPress={() => onPressDeleteBtn(data.item, data.index)}>
                            <Image source={require('../../../../assets/images/icon_delete_red.png')} />
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={0}
                rightOpenValue={-40}
            /> : <View style={styles.addIconContainer}>
                {getIcons("AddIcon")}
                <Text style={styles.txtNoNotesFound}>No Notes Found</Text>
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

export default EnterNotes;