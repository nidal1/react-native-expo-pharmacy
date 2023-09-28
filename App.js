import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import AppNavigation from './components/AppNavigation';
import { FontsProvider } from './contexts/FontsContext';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <FontsProvider>
        <PaperProvider>
          <AppNavigation />
          {/* <StatusBar style="auto" /> */}
        </PaperProvider>
      </FontsProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
