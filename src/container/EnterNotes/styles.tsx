import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,
        alignItems: 'center'

    },
    label: {
        marginTop: width / 37.5,
    },
    txtInputContainer: {
        height: height / 15,
        width: width / 1.09,
        padding: width / 37.5,
        borderWidth: 1,
        marginTop: width / 37.5,

    },
    txtNotesData: {
        color: "green",
        padding: 10
    }

})