import React from 'react';
import AppNavigation from './components/AppNavigation';
import { FontsProvider } from './contexts/FontsContext';

export default function App() {
  return (
    <FontsProvider>
      <AppNavigation />
      {/* <StatusBar style="auto" /> */}
    </FontsProvider>
  );
}
