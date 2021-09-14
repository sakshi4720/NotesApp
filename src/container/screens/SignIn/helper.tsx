import auth from '@react-native-firebase/auth';
import * as ValidateClass from "../../../utils/Validate";
import { showFlashMessage } from '../../../utils/Common';

export const onPressSignInBtn = async (currentEmail: string, currentPassword: string) => {
    
    let isValidate = ValidateClass.validateSignIn(currentEmail, currentPassword)
    if (isValidate) {
        try {
            let response = await auth()
                .signInWithEmailAndPassword(currentEmail, currentPassword)
                return response
        }
        catch (error) {
            showFlashMessage(error.message, 'danger');
        };

    }
}