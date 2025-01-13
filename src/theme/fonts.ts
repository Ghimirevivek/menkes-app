import { loadAsync } from 'expo-font';

export const FONTS = {
  calibri: {
    regular: 'calibris_regular',
    bold: 'calibris_bold',
    
  },
};

// preload fonts
export const loadFonts = () =>
  loadAsync({
    calibri_regular: require('@/assets/fonts/calibri-regular.ttf'),
    calibri_bold: require('@/assets/fonts/calibri-bold.ttf'),
   
  });
