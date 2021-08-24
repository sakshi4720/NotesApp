import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

  rootMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  itemMainConatiner: {
    // flexDirection: "row",
    paddingLeft: moderateScale(20),
    //paddingRight: ConstantManager.VALUE_20,
    paddingBottom: moderateScale(10),
    backgroundColor: 'white',
    // height:ConstantManager.VALUE_120,
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

  itemImg: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    //  marginTop:moderateScale(15),
    alignSelf: "center",

  },
  dataInfoContainer: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(15),
    paddingBottom: moderateScale(11),
    flex: 1
  },

  txtItemDescription: {
    marginTop: moderateScale(5),
    fontSize: moderateScale(12),
    color: 'gray',
    maxWidth: moderateScale(168),
    lineHeight: moderateScale(15),
    flex: 1

  },
  deleteBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: moderateScale(20)
  },
  addBtnContainer:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  }

})