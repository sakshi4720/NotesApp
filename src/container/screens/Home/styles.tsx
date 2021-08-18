import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,

    },
    iconAddBtnContainer: {
        bottom: width / 5,
        end: width / 15,
        position: 'absolute'
    },
    rootItemContainer: {
        margin: 15,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    txtTitle: {
        fontSize: 18,
        color: "red"
    },
    txtDescription:{
       
    }
})