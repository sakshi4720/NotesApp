import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get('window')
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

    rootMainContainer: {
        flex: 1,
    },
    label: {
        marginTop: width / 37.5,
    },
    txtInputContainer: {
        height: moderateScale(150),
        width: moderateScale(333),
        padding: moderateScale(8),
        borderWidth: 1,
        marginTop: moderateScale(30),
        borderRadius: moderateScale(10),
        borderColor: '#ADD8E6',
        marginStart: moderateScale(15)


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
        width: moderateScale(260),
        alignItems: 'center',
        justifyContent: 'center',


        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: 'transparent',

    },
    buttonText: {
        fontSize: moderateScale(22),
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'ProductSans-Bold',
        fontWeight: 'bold'
    },

    btnAddContainer: {
        width: moderateScale(260),
        height: moderateScale(50),
        justifyContent: 'center',
    },
    addImg: {
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
        fontWeight: 'bold'
    },
    rowBack: {
        alignItems: 'center',
        //backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    swiperListViewContainer: {
        marginTop: moderateScale(20)
    },
    deleteBtnContainer: {
        marginStart: moderateScale(20),
        marginBottom: moderateScale(15)
    },
    addBtnRootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(25),
        marginStart: moderateScale(15),
        justifyContent: 'space-between',
        marginEnd: moderateScale(15),
    }

})