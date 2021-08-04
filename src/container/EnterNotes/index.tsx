import React, { useState } from "react";
import { Button, SafeAreaView, TextInput, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

type RootStackParamList = {
    Home: { notes: string };
    EnterNotes: undefined
}


export interface EnterNotesProps {
    navigation: StackNavigationProp<RootStackParamList, "Home">
}

interface State {

}

const EnterNotes: React.FC<EnterNotesProps> = ({ navigation }) => {

    const [txtInpValue, setTxtInpValue] = useState('')

    return (
        <SafeAreaView style={styles.rootMainContainer}>
            <Text style={styles.label}>Enter Notes </Text>

            <TextInput style={styles.txtInputContainer}
                placeholder={'Enter your text here...'}
                multiline={false}
                value={txtInpValue}
                onChangeText={text => setTxtInpValue(text)} />

            <Button
                onPress={() => navigation.navigate('Home', {
                    notes: txtInpValue
                })}
                title="Submit"
                color="#841584"
            />

        </SafeAreaView>
    )
}

export default EnterNotes;