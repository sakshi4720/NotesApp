import React from "react";
import { SafeAreaView, Text, } from 'react-native';
import styles from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from "../../../services/RootNavigator";

interface Props {

}

const DetailedNotes: React.FC<Props> = () => {

    const route = useRoute<RouteProp<RootStackParamList, "DetailedNotes">>()

    return (
        <SafeAreaView style={styles.rootMainContainer}>
            <Text style={styles.userNotesTxt}>{route.params.userNotes}</Text>
        </SafeAreaView>
    )
}

export default DetailedNotes;