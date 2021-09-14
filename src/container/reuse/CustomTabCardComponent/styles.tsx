import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

  rootMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  linearGradientContainer: {

    width: moderateScale(333),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    flex: 1,
    shadowColor: '#0000000D',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,

  },
  itemMainConatiner: {
    paddingLeft: moderateScale(10),
    // paddingRight: moderateScale(10),
  },

  itemImg: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    alignSelf: "center",

  },
  dataInfoContainer: {
    flex: 1,
  },

  txtItemDescription: {
    fontSize: moderateScale(16),
    color: 'white',
    lineHeight: moderateScale(25),
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    
  },
  deleteBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: moderateScale(20)
  },
  addBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copyEditImgContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: moderateScale(10)
  },
  editImg: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: 'white'
  }

})