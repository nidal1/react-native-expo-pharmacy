import { createContext, useContext, useEffect, useState } from 'react';
import { useFonts as useExpoFonts, loadAsync } from 'expo-font';

const FontsContext = createContext();

const customFonts = {
  'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
  'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
  'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
  'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
  'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  'Raleway-ExtraBold': require('../assets/fonts/Raleway-ExtraBold.ttf'),
};

function FontsProvider({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontsError, setFontsError] = useState(null);
  useEffect(() => {
    async function loadFonts() {
      try {
        await loadAsync(customFonts);
        console.log(customFonts.raleway300);
        setFontsLoaded(true);
      } catch (error) {
        setFontsError(`Error: ${error.message}`);
      }
    }

    loadFonts();
  }, []);

  return (
    <FontsContext.Provider value={{ fontsLoaded, fontsError, customFonts }}>
      {children}
    </FontsContext.Provider>
  );
}

function useFonts() {
  const context = useContext(FontsContext);

  if (context === undefined)
    throw new Error('useFonts is used outside of a context.');

  return context;
}

export { FontsProvider, useFonts };
