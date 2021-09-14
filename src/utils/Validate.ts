import Config from './Config';
import { showFlashMessage } from './Common';

export type addNoteValidationType = {
  noteNameError?: string;
  noteDetailsError?: string
  isValid?: boolean;

}

export function validateSignIn(currentEmail: string, currentPassword: string) {

  if (currentEmail.length === 0) {
    showFlashMessage('Please enter your email', "danger")
    return false
  }

  if (currentPassword.length === 0) {
    showFlashMessage('Please enter your password', "danger")
    return false
  }

  return true
}

export function validateSignUp(currentUserName: string, currentEmail: string, currentPassword: string) {

  if (currentUserName.length === 0) {
    showFlashMessage('Please enter your username', "danger")
    return
  }

  if (currentEmail.length === 0) {
    showFlashMessage('Please enter your email', "danger")
    return false
  }

  if (currentPassword.length === 0) {
    showFlashMessage('Please enter your password', "danger")
    return false
  }

  return true
}




export function validateAddNote(notes: string): addNoteValidationType {

  if (notes.length === 0) {
    return {
      noteDetailsError: 'Note cannot be empty',
    };
  }

  if (notes.length < 20) {
    return {
      noteDetailsError: 'The provided notes are too short',
    };
  }
  return {
    isValid: true,
  };
}
