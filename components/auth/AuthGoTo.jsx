/* eslint-disable react/jsx-one-expression-per-line */
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import leftArr from '../../assets/triangle-l.png';
import { useFonts } from '../../contexts/FontsContext';

export default function AuthGoTo({ text, gotoText, onPress }) {
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex-row items-center justify-center">
        <Image source={leftArr} className="mr-2" />
        <Text
          style={{ fontFamily: fontFamilyR }}
          className="text-sm font-normal text-[#1C3146] leading-6"
        >
          {text}{' '}
        </Text>
        <Text
          style={{ fontFamily: fontFamilyR }}
          className="text-sm font-normal text-[#FEC107] leading-6"
        >
          {gotoText}{' '}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
