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
        position: 'absolute'
    }
})