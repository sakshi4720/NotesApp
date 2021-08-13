import Config from './Config';

export type addNoteValidationType = {
  noteNameError?: string;
  noteDetailsError?: string
  isValid?: boolean;

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
