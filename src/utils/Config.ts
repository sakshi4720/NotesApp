export default {
  regex: {
    setTitleRegex: /^[a-zA-Z 0-9#]*$/,
    setQuestionRegex: /^[\S\s]*[a-zA-Z 0-9'?_-]*$/,
    alphaNumericRegex: /^[\S\s]*[a-zA-Z 0-9]*$/,
  },
  error: {
    error_internet_connection:
      'Something went wrong!! Please check your internet and try again',
    error_note_title_empty: "Please enter note title!",
    error_auth_invalid_email:"That email address is invalid!",
    error_auth_email_already_in_use:'That email address is already in use!',

  },

  colors: {
    WHITE: '#ffffff',
    BLACK: 'black',
    HEX_GRADIENT1: ['#0000FF', '#ADD8E6'],
    HEX_GRADIENT2: ['#ADD8E6', '#728FCE'],

  },
  toast_types: {
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger'
  },
  strings:{
    signIn_text:"Already have an account? Sign In here",
    signUp_text:"Create new account? Sign up here.",
    signed_in_success:"User account created & signed in!",
    note_copied_to_clipboard:"Note copied to clipboard",
    logout_confirmation: "Are you sure you want to logout?",
    textinput_placeholder_text_for_notes:"Enter your text here..."
  },
  code:{
    error_auth_invalid_email:'auth/email-already-in-use',
    error_auth_email_already_in_use:'auth/invalid-email'
  }
}