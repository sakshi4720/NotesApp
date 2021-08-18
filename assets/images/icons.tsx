import React from 'react';
import { IconTypes, Icons } from './index';

export const getIcons = (type: IconTypes, iconSize = 50) => {
  switch (type) {
    case 'AddIcon':
      return <Icons.AddIcon height={iconSize} width={iconSize} />;
      case 'MCQIcon':
      return <Icons.MCQIcon height={iconSize} width={iconSize} />;
      case 'QuestionIcon':
      return <Icons.QuestionIcon height={iconSize} width={iconSize} />;

  }
}