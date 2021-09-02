import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
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
        justifyContent: 'center'

    },
    txtTitle: {
        fontSize: 18,
        color: "red",
        fontFamily: 'ProductSans-BoldItalic'
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
        marginEnd: moderateScale(20),
        //marginBottom: moderateScale(15)
      },
      addIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})