import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, Text, TouchableWithoutFeedback, View, TouchableOpacity, Alert, Image, Keyboard } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../../services/RootNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import LinearGradient from "react-native-linear-gradient";
import { addNoteValidationType, validateAddNote } from "../../../utils/Validate";
import { getAddedNotes, startAddNotes,  } from "../../../redux/Actions/Notes";
import Header from '../../reuse/CustomHeader';

export interface Note {
    id: number;
    value: string;

}

const EnterNotes = () => {
    type NavigationProp = StackNavigationProp<RootStackParamList, 'Notes'>;
    const route = useRoute<RouteProp<RootStackParamList, 'Notes'>>();
    const navigation = useNavigation<NavigationProp>();

    const dispatch = useDispatch()

    const [currentText, setCurrentText] = useState("")
    const [noteId, setNoteId] = useState(0)
    const [error, setError] = useState<addNoteValidationType>({})
    const [isFromEditNotes, setIsFromEditNotes] = useState<boolean>(false);

    useEffect(() => {
        if (!route.params)
            return
        if (route.params.userNoteObj) {
            var editableNote = route.params.userNoteObj.value
            setNoteId(route.params.userNoteObj.id)
            setCurrentText(editableNote);
            setIsFromEditNotes(true)
        }


    }, [])

    //onChangeText -- sets text in textinput
    const onChangeText = (text: string) => {
        setCurrentText(text)
    }

    //function to add notes
    const onPressAddNoteBtn = async () => {

        const result = validateAddNote(currentText);
        if (!result.isValid) {
            if (result.noteDetailsError) {
                return Alert.alert(result.noteDetailsError);
            }
            return setError({
                ...error,
                noteNameError: result.noteNameError,
            });
        }
        const res = await dispatch(startAddNotes(currentText))
        dispatch(getAddedNotes())
        navigation.goBack()
    }

    //callback for editing a note
    const onPressEditNoteBtn = async () => {

        const result = validateAddNote(currentText);
        if (!result.isValid) {
            if (result.noteDetailsError) {
                return Alert.alert(result.noteDetailsError);
            }
            return setError({
                ...error,
                noteNameError: result.noteNameError,
            });
        }
        //  const res = await dispatch(startEditNotes(noteId,currentText))
        //  dispatch(getAddedNotes())
        // navigation.goBack()
    }

    // navigate to back screen
    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.rootMainContainer}>
                <Header isShowingOnBackPress={true}
                    headerTitle={'Notes'}
                    isShowingSignOut={false}
                    onBackPress={onBackPress}
                    onSignOutBtnPress={() => { }}
                />
                <TextInput style={styles.txtInputContainer}
                    placeholder={'Enter your text here...'}
                    multiline={true}
                    textAlignVertical={'top'}
                    value={currentText}
                    onChangeText={text => onChangeText(text)} />

                <View style={styles.addBtnRootContainer}>
                    <LinearGradient colors={['#ADD8E6', '#728FCE']}
                        style={styles.linearGradient}>
                        <TouchableOpacity style={styles.btnAddContainer}
                             onPress={isFromEditNotes ? onPressEditNoteBtn : onPressAddNoteBtn}>
                            <Text style={styles.buttonText}>{isFromEditNotes ? 'Edit' : 'Add'}</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity style={styles.addImg}
                        onPress={isFromEditNotes ? onPressEditNoteBtn : onPressAddNoteBtn}>
                        <Image source={require('../../../../assets/images/ic_add_notes.png')} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

        </TouchableWithoutFeedback>
    )

}

export default EnterNotes;