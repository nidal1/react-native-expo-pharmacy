import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import Home from './Home';
import Pharmacy from './Pharmacy';
import Search from './Search';
import Messaging from './Messaging';
import Account from './Account';
import house from '../assets/house.png';
import houseD from '../assets/house-d.png';
import user from '../assets/user.png';
import userD from '../assets/user-d.png';
import storefront from '../assets/storefront.png';
import storefrontD from '../assets/storefront-d.png';
import magnifyingGlass from '../assets/magnifyingGlass.png';
import magnifyingGlassD from '../assets/magnifyingGlass-d.png';
import chat from '../assets/chat.png';
import chatD from '../assets/chat-d.png';

function CustomIcon({ focusedImage, nonFocusedImage, focused, routeName }) {
  return (
    <View className="items-center">
      {focused ? (
        <Image source={focusedImage} />
      ) : (
        <Image source={nonFocusedImage} />
      )}
      {focused ? (
        <Text className="text-[#2879FF] font-semibold text-sm">
          {routeName}
        </Text>
      ) : null}
    </View>
  );
}

function icon(route) {
  return function ({ focused }) {
    if (route.name === 'home') {
      return (
        <CustomIcon
          focused={focused}
          focusedImage={house}
          nonFocusedImage={houseD}
          routeName="Home"
        />
      );
    }
    if (route.name === 'account') {
      return (
        <CustomIcon
          focused={focused}
          focusedImage={user}
          nonFocusedImage={userD}
          routeName="Account"
        />
      );
    }
    if (route.name === 'search') {
      return (
        <CustomIcon
          focused={focused}
          focusedImage={magnifyingGlass}
          nonFocusedImage={magnifyingGlassD}
          routeName="Search"
        />
      );
    }
    if (route.name === 'messaging') {
      return (
        <CustomIcon
          focused={focused}
          focusedImage={chat}
          nonFocusedImage={chatD}
          routeName="Messaging"
        />
      );
    }
    return (
      <CustomIcon
        focused={focused}
        focusedImage={storefront}
        nonFocusedImage={storefrontD}
        routeName="Pharmacy"
      />
    );
  };
}

export default function Main() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: icon(route),
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="pharmacy"
        component={Pharmacy}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="search"
        component={Search}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="messaging"
        component={Messaging}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="account"
        component={Account}
      />
    </Tab.Navigator>
  );
}
