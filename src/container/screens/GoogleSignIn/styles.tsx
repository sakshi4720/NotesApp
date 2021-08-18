import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,
        alignItems: 'center',
       
    },
    rootInnerContainer: {
        width: '90%',
        marginTop: moderateScale(30),
        flex:1
    },
    linearGradient: {
        height:moderateScale(65),
        width:moderateScale(345),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:moderateScale(25),
       
       },
       buttonText: {
         fontSize:22,
         textAlign: 'center',
         color: '#ffffff',
         backgroundColor: 'transparent',
       },
 
       btnAddContainer:{
        width:moderateScale(345),
        height:moderateScale(65),
        justifyContent: 'center',
       },
})