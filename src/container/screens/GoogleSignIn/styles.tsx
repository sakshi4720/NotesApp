import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,
        alignItems: 'center',

    },
    rootInnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        height: moderateScale(65),
        width: moderateScale(333),
        alignItems: 'center',
        justifyContent: 'center',
        //marginBottom:moderateScale(25),
        alignSelf: 'center'

    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

    btnAddContainer: {
        width: moderateScale(345),
        height: moderateScale(65),
        justifyContent: 'center',
    },
})