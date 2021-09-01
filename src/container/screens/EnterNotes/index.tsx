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
    type detailScreenProp = StackNavigationProp<RootStackParamList, 'DetailedNotes'>;
    const navigation = useNavigation<detailScreenProp>();
    const dispatch = useDispatch()

    const [currentText, setCurrentText] = useState("")
    const [error, setError] = useState<addNoteValidationType>({})

    const onChangeText = (text: string) => {
        setCurrentText(text)
    }

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
        // res 
        // Async Redux thunk
        // return function
        navigation.goBack()
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.rootMainContainer}>
                <Header isShowingOnBackPress={true}
                    headerTitle={'Notes'}
                    onBackPress={() => navigation.goBack()}
                />
                <TextInput style={styles.txtInputContainer}
                    placeholder={'Enter your text here...'}
                    multiline={true}
                    value={currentText}
                    onChangeText={text => onChangeText(text)} />
                {/**moderstae Scale */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                    marginStart: 15,
                    justifyContent: 'space-between',
                    marginEnd: 15,
                }}>
                    <LinearGradient colors={['#ADD8E6', '#728FCE']}
                        style={styles.linearGradient}>
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