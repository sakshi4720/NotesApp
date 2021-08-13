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
        error_note_title_regex: "Note Title can only contain alphanumeric characters and #. Please check and fix.",
        error_set_title_empty: "Please enter set title!",
        error_set_title_regex: "Set Title can only contain alphanumeric characters and #. Please check and fix.",
        error_report_by_user: "We have received your request and necessary action will be taken within 24 hours.",
        error_block_user: "Are you sure you want to block this user. No more interaction will be allowed between you and this user.",
        error_add_set_question: "You only add 15 questions in a Set !!!!",
        error_duplicate_set_title: "A Set of same name already exists. Please enter a different name!",
        error_answer_value_empty: "Please enter answer!",
        error_answer_value_regex: "Answer can only contain alphanumeric characters and #. Please check and fix.",
        error_duplicate_note_title:
          'A Note of same name already exists. Please enter a different name!',
        error_mcq_value_empty: "Please select the answer of the question!"
      },
}