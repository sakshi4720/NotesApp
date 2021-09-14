import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
const { width } = Dimensions.get('window')

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
        margin: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center'

    },
    txtTitle: {
        fontSize: moderateScale(18),
        fontFamily: 'Montserrat-Bold',
    },
    txtNoNotesFound: {
        marginTop: moderateScale(20),
        fontSize: moderateScale(22),
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    swiperListViewContainer: {
        marginTop: moderateScale(20)
    },
    deleteBtnContainer: {
        marginEnd: moderateScale(20),
    },
    addIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteIcon: {
        height: moderateScale(25),
        width: moderateScale(25),
    }
})