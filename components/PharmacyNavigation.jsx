import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Saved from './pharmacy/Saved';
import Nearest from './pharmacy/Nearest';
import { capitalize } from '../utils/functions';
import { useFonts } from '../contexts/FontsContext';

function CustomLabel({ focused, routeName }) {
  const { fontsLoaded } = useFonts();
  const fontFamilySB = fontsLoaded ? 'Raleway-SemiBold' : '';
  return focused ? (
    <Text
      style={{ fontFamily: fontFamilySB }}
      className="text-center text-[#081C34] font-semibold text-lg"
    >
      {routeName}
    </Text>
  ) : (
    <Text
      style={{ fontFamily: fontFamilySB }}
      className="text-center text-[#A7B0B5] font-semibold text-lg"
    >
      {routeName}
    </Text>
  );
}

function label(route) {
  return function ({ focused }) {
    return <CustomLabel focused={focused} routeName={capitalize(route.name)} />;
  };
}

const Tab = createMaterialTopTabNavigator();

export default function PharmacyNavigation() {
  return (
    <Tab.Navigator
      style={{ marginTop: -50 }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'transparent',
          maxWidth: '55%',
          marginHorizontal: '22.5%',
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#2879FF',
        },
        tabBarShowLabel: true,
        tabBarLabel: label(route),
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarOptions: {
            upperCaseLabel: false,
          },
        }}
        name="saved"
        component={Saved}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="nearest"
        component={Nearest}
      />
    </Tab.Navigator>
  );
}
