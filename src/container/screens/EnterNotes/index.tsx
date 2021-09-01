import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, Text, TouchableWithoutFeedback, View, TouchableOpacity, Alert, Image, Keyboard } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import LinearGradient from "react-native-linear-gradient";
import { addNoteValidationType, validateAddNote } from "../../../utils/Validate";
import { getIcons } from '../../../../assets/images/icons'
import CustomTabCardComponent from '../../reuse/CustomTabCardComponent';
import { startAddNotes } from "../../../redux/Actions/Notes";
import { SwipeListView } from "react-native-swipe-list-view";
import Header from '../../reuse/CustomHeader';


export interface Note {

    id: number;
    value: string;

}


const EnterNotes = () => {

    const dispatch = useDispatch()

    type detailScreenProp = StackNavigationProp<RootStackParamList, 'DetailedNotes'>;
    const navigation = useNavigation<detailScreenProp>();

    const [notes, setNotes] = useState({ id: 0, value: "" })
    const [noteArray, setNoteArray] = useState<Note[]>([]);
    const [error, setError] = useState<addNoteValidationType>({})

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

        navigation.goBack()

    }

    const onPressDeleteBtn = (item: Note, index: number) => {

        let selectedIndex = noteArray.findIndex((element) => { return element.id == item.id })
        noteArray.splice(selectedIndex, 1)
        setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {
        console.log(JSON.stringify(item))
        return (
            <CustomTabCardComponent userNotesObj={item} />
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.rootMainContainer}>

                <Header isShowingOnBackPress={true}
                    headerTitle={'Notes'}
                    onBackPress={() => navigation.goBack()}
                />

                {/* {noteArray.length > 0 ? <SwipeListView
                    style={styles.swiperListViewContainer}
                    data={noteArray}
                    renderItem={renderNotes}
                    keyExtractor={(item) => item.id.toString()}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={styles.deleteBtnContainer}
                                onPress={() => onPressDeleteBtn(data.item, data.index)}>
                                <Image source={require('../../../../assets/images/icon_delete_red.png')}
                                    style={{ height: 25, width: 25 }} />
                            </TouchableOpacity>
                        </View>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-40}
                /> : <View style={styles.addIconContainer}>
                    {getIcons("AddIcon")}
                    <Text style={styles.txtNoNotesFound}>No Notes Found</Text>
                </View>} */}

                <TextInput style={styles.txtInputContainer}
                    placeholder={'Enter your text here...'}
                    multiline={true}
                    value={notes.value}
                    onChangeText={text => onChangeText(text)} />


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, marginStart: 15, justifyContent: 'space-between', marginEnd: 15, }}>
                    <LinearGradient colors={['#ADD8E6', '#728FCE']} style={styles.linearGradient}>
                        <TouchableOpacity style={styles.btnAddContainer}
                            onPress={() => { onPressAddNoteBtn() }}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity style={styles.addImg}>
                        <Image source={require('../../../../assets/images/ic_add_notes.png')} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

        </TouchableWithoutFeedback>
    )

}

export default EnterNotes;