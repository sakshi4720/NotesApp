import Config from './Config';
import { showMessage, } from "react-native-flash-message";

export const getRandomColors = () => {
  const gradientColorArray = [
    Config.colors.HEX_GRADIENT1,
    Config.colors.HEX_GRADIENT2,
  ];
  return gradientColorArray[Math.floor(Math.random() * gradientColorArray.length)];
};

//show Toast Message : help to show the toast messages and response from api
export const showFlashMessage = (text: string, type: "success" | "danger" | "warning", duration = 2000, position = "bottom") => {

  showMessage({
    message: text,
    duration,
    position: 'bottom',
    type: type

  })


}