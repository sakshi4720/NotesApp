import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({

  rootMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  linearGradientContainer:{
    paddingLeft: moderateScale(20),
    paddingBottom: moderateScale(10),
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
   
  },

  itemImg: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    //  marginTop:moderateScale(15),
    alignSelf: "center",

  },
  dataInfoContainer: {
    //marginLeft: moderateScale(15),
    marginTop: moderateScale(15),
    paddingBottom: moderateScale(11),
    flex: 1,
    height:moderateScale(100)
    
  },

  txtItemDescription: {
    marginTop: moderateScale(5),
    fontSize: moderateScale(18),
    color: 'white',
    maxWidth: moderateScale(250),
    lineHeight: moderateScale(15),
    fontFamily:'ProductSans-Bold',
    flex: 1,
    paddingTop:10,
    paddingBottom:10,

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