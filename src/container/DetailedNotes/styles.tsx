import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',

    },
    userNotesTxt:{
        fontSize:16,
        color:'red'
    }
    
})