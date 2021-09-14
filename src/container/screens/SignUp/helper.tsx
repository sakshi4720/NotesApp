import auth from '@react-native-firebase/auth';
import * as ValidateClass from "../../../utils/Validate";
import { showFlashMessage } from '../../../utils/Common';

export const onPressSignUpBtn = async (currentUserName: string, currentEmail: string, currentPassword: string) => {

    let isValidate = ValidateClass.validateSignUp(currentUserName, currentEmail, currentPassword)
    if (isValidate) {
        try {
            let response = await auth()
                .createUserWithEmailAndPassword(currentEmail, currentPassword)
            return response
        }
        catch (error) {
            showFlashMessage(error.message, 'danger');
        };

    }
}