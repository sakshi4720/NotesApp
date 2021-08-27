import Config from './Config';

export const getRandomColors = () => {
    const gradientColorArray = [
      Config.colors.HEX_GRADIENT1,
      Config.colors.HEX_GRADIENT2, 
    ];
    return gradientColorArray[Math.floor(Math.random() * gradientColorArray.length)];
  };