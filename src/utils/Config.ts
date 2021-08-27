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
    HEX_GRADIENT1: ['#A62D8E', '#3A2A6E'],
    HEX_GRADIENT2: ['#8F00FF', '#DDA0DD'],


  },
}