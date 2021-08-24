import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { updateUserToken, } from '../redux/Actions/UserDataToken';
import { useDispatch,  } from "react-redux";
export const SocialLogin = async () => {

try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    return userInfo;
    
    // navigation.navigate('EnterNotes')
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      //crashlytics().crash()
      // some other error happened
    }
  }
}