/* eslint-disable global-require */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { loadAsync } from 'expo-font';

const customFonts = {
  'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
  'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
  'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
  'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
  'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  'Raleway-ExtraBold': require('../assets/fonts/Raleway-ExtraBold.ttf'),
};

const FontsContext = createContext();

function FontsProvider({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontsError, setFontsError] = useState(null);
  useEffect(() => {
    async function loadFonts() {
      try {
        await loadAsync(customFonts);
        setFontsLoaded(true);
      } catch (error) {
        setFontsError(`Error: ${error.message}`);
      }
    }

    loadFonts();
  }, []);

  const memoValues = useMemo(
    () => ({
      fontsLoaded,
      fontsError,
      customFonts,
    }),
    [fontsLoaded, fontsError]
  );

  return (
    <FontsContext.Provider value={memoValues}>{children}</FontsContext.Provider>
  );
}

function useFonts() {
  const context = useContext(FontsContext);

  if (context === undefined) {
    throw new Error('useFonts is used outside of a context.');
  }

  return context;
}

export { FontsProvider, useFonts };
