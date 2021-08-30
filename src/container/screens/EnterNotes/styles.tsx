import { StyleSheet, Dimensions, Platform } from "react-native";
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
        height: height / 12,
        width: moderateScale(333),
        padding: width / 37.5,
        borderWidth: 1,
        marginTop: width / 37.5,
        borderRadius: moderateScale(10),
        borderColor: '#FF6700'

    },
    txtNotesData: {
        color: "green",
        padding: moderateScale(10),
    },
    rootContainerNoteItem: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    linearGradient: {
        height: moderateScale(65),
        width: moderateScale(333),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(25),
        marginBottom: Platform.OS == "android" ? moderateScale(25) : moderateScale(10),
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: 'transparent'
    },
    buttonText: {
        fontSize: moderateScale(22),
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'ProductSans-Bold',
        fontWeight:'bold'
    },

    btnAddContainer: {
        width: moderateScale(333),
        height: moderateScale(65),
        justifyContent: 'center',
    },
    addIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtNoNotesFound: {
        marginTop: moderateScale(20),
        fontSize: moderateScale(22),
        textAlign: 'center',
        fontFamily: 'ProductSans-Bold',
        fontWeight:'bold'
    },
    rowBack: {
        alignItems: 'center',
        //backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
         
    },
    swiperListViewContainer:{
        marginTop: moderateScale(20)
    },
    deleteBtnContainer: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        marginStart: moderateScale(20)
      },

})