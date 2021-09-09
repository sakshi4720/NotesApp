import { StyleSheet, } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

    headerContainer: {
        flex: 1,

    },
    linearGradient: {
        // flex:1,
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
    },
    headerTitle: {
        color: 'white',
        fontSize: moderateScale(20),
        fontFamily: 'ProductSans-Bold',
        fontWeight: 'bold',

    },
    rightImageContainer: {
        end: moderateScale(15),
        position: 'absolute',
        height: moderateScale(40),
        width: moderateScale(40),
        justifyContent: 'center'
    },
    backIconContainer: {
        start: moderateScale(15),
        position: 'absolute',
        height: moderateScale(40),
        width: moderateScale(40),
        justifyContent: 'center'
    },
    backImg: {
        height: moderateScale(20),
        width: moderateScale(20),
        tintColor: 'white'
    },
    signOutImg: {
        height: moderateScale(28),
        width: moderateScale(28),
        resizeMode: 'contain',
        tintColor: 'white'
    }
})