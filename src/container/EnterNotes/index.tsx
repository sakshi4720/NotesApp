import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, TextInput, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { RootStackParamList } from "../../services/RootNavigator";
import { RouteProp, useRoute } from "@react-navigation/native";

const EnterNotes = () => {

    // const route = useRoute<RouteProp<RootStackParamList, "EnterNotes">>()

    const [txtInpValue, setTxtInpValue] = useState<string>('')

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