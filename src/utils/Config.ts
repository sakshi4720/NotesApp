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

  },

  colors: {
    WHITE: '#ffffff',
    BLACK: 'black',
    HEX_GRADIENT1: ['#0000FF', '#ADD8E6'],
    HEX_GRADIENT2: ['#ADD8E6', '#728FCE'],


  },
}