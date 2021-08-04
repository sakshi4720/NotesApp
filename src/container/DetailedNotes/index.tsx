import React from "react";
import { Button, SafeAreaView, Text, View } from 'react-native';
import styles from './styles'

interface Props {

}


const DetailedNotes: React.FC<Props> = () => {
    return (
        <SafeAreaView style={styles.rootMainContainer}>
            <Text>DetailedNotes</Text>
        </SafeAreaView>
    )
}

export default DetailedNotes;