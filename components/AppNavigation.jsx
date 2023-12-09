import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signin"
          component={Signin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
