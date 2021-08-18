import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
import { moderateScale } from 'react-native-size-matters';

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
        padding: 10,
        // flex:1,

    },
    rootContainerNoteItem: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    linearGradient: {
       height:moderateScale(65),
       width:moderateScale(345),
       alignItems: 'center',
       justifyContent: 'center',
       marginTop:moderateScale(25)
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
      addIconContainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      }

})