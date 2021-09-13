import { StyleSheet } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,
    },
    rootInnerContainer: {
        flex: 1,
        marginStart: moderateScale(15),
        marginEnd: moderateScale(15),
        marginTop: moderateScale(85),
    },
    textFieldContainer: {
        marginTop: moderateScale(20),
    },
    linearGradient: {
        height: moderateScale(55),
        width: moderateScale(345),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: 'transparent',
        marginStart: moderateScale(15),
        marginEnd: moderateScale(15),
        alignSelf: 'center'
    },
    btnAddContainer: {
        width: moderateScale(260),
        height: moderateScale(50),
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: moderateScale(20),
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Montserrat-Regular',
    },
    txtSignUp: {
        color: '#728FCE',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        marginBottom: moderateScale(25),
        marginTop: moderateScale(15),
    }
})